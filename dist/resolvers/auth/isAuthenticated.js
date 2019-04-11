"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _graphqlResolvers = require("graphql-resolvers");

var _default = function _default(parent, args, _ref) {
  var authenticatedUser = _ref.authenticatedUser;

  if (!authenticatedUser) {
    return new _apolloServer.ForbiddenError('User not authenticated.');
  }

  return _graphqlResolvers.skip;
};

exports["default"] = _default;