"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("./query"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _user = _interopRequireDefault(require("./user"));

var chessResolvers = {
  Query: _query["default"],
  Mutation: _mutation["default"],
  User: _user["default"]
};
var _default = chessResolvers;
exports["default"] = _default;