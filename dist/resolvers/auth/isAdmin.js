"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _graphqlResolvers = require("graphql-resolvers");

var _isAuthenticated = _interopRequireDefault(require("./isAuthenticated"));

var _default = (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], function (parent, args, _ref) {
  var authenticatedUser = _ref.authenticatedUser;

  if (authenticatedUser.role !== 'ADMIN') {
    return new _apolloServer.ForbiddenError('Not authorized as admin.');
  }

  return _graphqlResolvers.skip;
});

exports["default"] = _default;