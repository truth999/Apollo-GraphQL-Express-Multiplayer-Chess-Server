"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _user = _interopRequireDefault(require("./user"));

var _chess = _interopRequireDefault(require("./chess"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  scalar Date\n\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var linkSchema = (0, _apolloServerExpress.gql)(_templateObject());
var _default = [linkSchema, _user["default"], _chess["default"]];
exports["default"] = _default;