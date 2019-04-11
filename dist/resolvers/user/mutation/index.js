"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _login = _interopRequireDefault(require("./login"));

var _register = _interopRequireDefault(require("./register"));

var _updateProfile = _interopRequireDefault(require("./updateProfile"));

var _changePassword = _interopRequireDefault(require("./changePassword"));

var _deleteUser = _interopRequireDefault(require("./deleteUser"));

var Mutation = {
  login: _login["default"],
  register: _register["default"],
  updateProfile: _updateProfile["default"],
  changePassword: _changePassword["default"],
  deleteUser: _deleteUser["default"]
};
var _default = Mutation;
exports["default"] = _default;