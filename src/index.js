import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import jwt from 'jsonwebtoken';

import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schema from './schema';
import models, { connectDb } from './models';
import resolvers from './resolvers';

const app = express();

app.use(cors());

app.use(morgan('dev'));

const getAuthenticatedUser = async authHeader => {
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      return jwt.verify(token, process.env.SECRET);
    } catch (e) {
      return null;
    }
  }
  return null;
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  subscriptions: {
    onConnect: async connectionParams => {
      const authHeader = connectionParams.Authorization;
      if (authHeader) {
        const authenticatedUser = await getAuthenticatedUser(authHeader);
        return {
          authenticatedUser
        };
      }
      throw new AuthenticationError('Not authenticated');
    }
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        ...connection.context
      };
    }

    const authHeader = req.get('Authorization');
    const authenticatedUser = await getAuthenticatedUser(authHeader);
    return {
      models,
      secret: process.env.SECRET,
      authenticatedUser
    };
  }
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8000;

server.installSubscriptionHandlers(httpServer);

connectDb().then(() => {
  httpServer.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
  });
});
