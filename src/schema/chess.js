import { gql } from 'apollo-server-express';

const chessSchema = gql`
  extend type Query {
    games: [ChessGame!]
    game(id: ID!): ChessGame
  }

  extend type Mutation {
    createGame: ChessGame!
    joinGame(id: ID!): ChessGame!
    makeMove(id: ID!, move: String!): ChessGame!
  }

  extend type Subscription {
    chessMoveMade(id: ID!): ChessGame
  }

  type ChessGame {
    id: ID!
    playerOneID: ID!
    playerTwoID: ID
    playerOne: User!
    playerTwo: User
    playerOneColor: String!
    playerTwoColor: String!
    fen: String!
    pgn: String!
    startDate: Date!
    endDate: Date
    started: Boolean!
    gameOver: Boolean!
    victoryType: String
  }
`;

export default chessSchema;
