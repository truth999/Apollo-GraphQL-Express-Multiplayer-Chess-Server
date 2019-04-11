"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EVENTS = void 0;

var _apolloServer = require("apollo-server");

var CHESS_GAME_EVENTS = _interopRequireWildcard(require("./chess-game"));

var EVENTS = {
  CHESS_GAME: CHESS_GAME_EVENTS
};
exports.EVENTS = EVENTS;

var _default = new _apolloServer.PubSub();

exports["default"] = _default;