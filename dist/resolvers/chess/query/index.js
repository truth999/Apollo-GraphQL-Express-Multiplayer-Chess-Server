"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _games = _interopRequireDefault(require("./games"));

var _game = _interopRequireDefault(require("./game"));

var Query = {
  games: _games["default"],
  game: _game["default"]
};
var _default = Query;
exports["default"] = _default;