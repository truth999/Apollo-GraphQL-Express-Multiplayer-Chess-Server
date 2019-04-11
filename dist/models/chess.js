"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var ObjectId = _mongoose["default"].Schema.Types.ObjectId;
var ChessSchema = new _mongoose["default"].Schema({
  playerOneID: ObjectId,
  playerTwoID: ObjectId,
  playerOneColor: String,
  playerTwoColor: String,
  startDate: Date,
  endDate: Date,
  fen: String,
  pgn: String,
  gameOver: Boolean,
  started: Boolean,
  victoryType: String,
  winnerID: ObjectId
}); // eslint-disable-next-line new-cap

var Chess = new _mongoose["default"].model('Chess', ChessSchema);
var _default = Chess;
exports["default"] = _default;