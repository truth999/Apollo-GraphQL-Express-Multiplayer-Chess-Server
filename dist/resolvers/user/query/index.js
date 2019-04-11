"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("./users"));

var _user = _interopRequireDefault(require("./user"));

var _me = _interopRequireDefault(require("./me"));

var Query = {
  users: _users["default"],
  user: _user["default"],
  me: _me["default"]
};
var _default = Query;
exports["default"] = _default;