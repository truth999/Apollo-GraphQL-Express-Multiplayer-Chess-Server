import { gql } from 'apollo-server-express';

const chessSchema = gql`
  input ChessGameFilter {
    playerID: ID
    winnerID: ID
    started: Boolean
    gameOver: Boolean
  }

  extend type Query {
    games(filter: ChessGameFilter, limit: Int, offset: Int): [ChessGame!]
    gamesCount: Int!
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
    winnerID: ID
    winner: User
  }
`;

export default chessSchema;
