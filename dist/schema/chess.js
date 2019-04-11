"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  extend type Query {\n    games: [ChessGame!]\n    game(id: ID!): ChessGame\n  }\n\n  extend type Mutation {\n    createGame: ChessGame!\n    joinGame(id: ID!): ChessGame!\n    makeMove(id: ID!, move: String!): ChessGame!\n  }\n\n  extend type Subscription {\n    chessMoveMade(id: ID!): ChessGame\n  }\n\n  type ChessGame {\n    id: ID!\n    playerOneID: ID!\n    playerTwoID: ID\n    playerOne: User!\n    playerTwo: User\n    playerOneColor: String!\n    playerTwoColor: String!\n    fen: String!\n    pgn: String!\n    startDate: Date!\n    endDate: Date\n    started: Boolean!\n    gameOver: Boolean!\n    victoryType: String\n    winnerID: ID\n    winner: User\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var chessSchema = (0, _apolloServerExpress.gql)(_templateObject());
var _default = chessSchema;
exports["default"] = _default;