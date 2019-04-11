"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  extend type Query {\n    users: [User!]\n    user(id: ID!): User\n    me: User\n  }\n\n  extend type Mutation {\n    register(\n      username: String!\n      email: String!\n      password: String!\n      firstName: String\n      lastName: String\n    ): Token!\n    login(username: String!, password: String!): Token!\n    updateProfile(firstName: String, lastName: String): User!\n    changePassword(oldPassword: String!, newPassword: String!): Boolean!\n    deleteUser(id: ID!): Boolean!\n  }\n\n  type Token {\n    token: String!\n  }\n\n  type User {\n    id: ID!\n    username: String!\n    email: String!\n    firstName: String\n    lastName: String\n    chessGames: [ChessGame!]\n    role: String\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var userSchema = (0, _apolloServerExpress.gql)(_templateObject());
var _default = userSchema;
exports["default"] = _default;