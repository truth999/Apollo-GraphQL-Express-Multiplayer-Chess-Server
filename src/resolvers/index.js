import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import chessResolvers from './chess';

const dateScalarResolver = {
  Date: GraphQLDateTime
};

const resolvers = [dateScalarResolver, userResolvers, chessResolvers];

export default resolvers;
