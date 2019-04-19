import { gql } from 'apollo-server-express';

const userSchema = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      firstName: String
      lastName: String
    ): Token!
    login(username: String!, password: String!): Token!
    updateProfile(firstName: String, lastName: String): User!
    changePassword(oldPassword: String!, newPassword: String!): Boolean!
    deleteUser(id: ID!): Boolean!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    chessGames: [ChessGame!]
    eloRating: Float!
    role: String
  }
`;

export default userSchema;
