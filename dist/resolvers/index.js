"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlIsoDate = require("graphql-iso-date");

var _user = _interopRequireDefault(require("./user"));

var _chess = _interopRequireDefault(require("./chess"));

var dateScalarResolver = {
  Date: _graphqlIsoDate.GraphQLDateTime
};
var resolvers = [dateScalarResolver, _user["default"], _chess["default"]];
var _default = resolvers;
exports["default"] = _default;