"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isAuthenticated", {
  enumerable: true,
  get: function get() {
    return _isAuthenticated["default"];
  }
});
Object.defineProperty(exports, "isAdmin", {
  enumerable: true,
  get: function get() {
    return _isAdmin["default"];
  }
});

var _isAuthenticated = _interopRequireDefault(require("./isAuthenticated"));

var _isAdmin = _interopRequireDefault(require("./isAdmin"));