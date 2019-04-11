"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./user"));

var _chess = _interopRequireDefault(require("./chess"));

var connectDb = function connectDb() {
  var dbUrl = process.env.TEST_DATABASE_URL || process.env.DATABASE_URL;
  return _mongoose["default"].connect(dbUrl, {
    useNewUrlParser: true
  });
};

exports.connectDb = connectDb;
var models = {
  User: _user["default"],
  Chess: _chess["default"]
};
var _default = models;
exports["default"] = _default;