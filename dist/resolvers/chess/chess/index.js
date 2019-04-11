"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _playerOne = _interopRequireDefault(require("./playerOne"));

var _playerTwo = _interopRequireDefault(require("./playerTwo"));

var _winner = _interopRequireDefault(require("./winner"));

var Chess = {
  playerOne: _playerOne["default"],
  playerTwo: _playerTwo["default"],
  winner: _winner["default"]
};
var _default = Chess;
exports["default"] = _default;