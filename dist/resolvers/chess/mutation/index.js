"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createGame = _interopRequireDefault(require("./createGame"));

var _joinGame = _interopRequireDefault(require("./joinGame"));

var _makeMove = _interopRequireDefault(require("./makeMove"));

var Mutation = {
  createGame: _createGame["default"],
  joinGame: _joinGame["default"],
  makeMove: _makeMove["default"]
};
var _default = Mutation;
exports["default"] = _default;