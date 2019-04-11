"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var UserSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [_isEmail["default"], 'Email is not valid']
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 42
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  role: {
    type: String
  }
});

UserSchema.statics.findByUsernameOrEmail =
/*#__PURE__*/
function () {
  var _findByUsernameOrEmail = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(usernameOrEmail) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              username: usernameOrEmail
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return this.findOne({
              email: usernameOrEmail
            });

          case 6:
            user = _context.sent;

          case 7:
            return _context.abrupt("return", user);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function findByUsernameOrEmail(_x) {
    return _findByUsernameOrEmail.apply(this, arguments);
  }

  return findByUsernameOrEmail;
}();

UserSchema.pre('save',
/*#__PURE__*/
function () {
  var _preSave = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.encryptPassword(this.password);

          case 2:
            this.password = _context2.sent;

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function preSave() {
    return _preSave.apply(this, arguments);
  }

  return preSave;
}());

UserSchema.methods.encryptPassword =
/*#__PURE__*/
function () {
  var _encryptPassword = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(password) {
    var saltRounds;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            saltRounds = 10;
            return _context3.abrupt("return", _bcrypt["default"].hash(password, saltRounds));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  function encryptPassword(_x2) {
    return _encryptPassword.apply(this, arguments);
  }

  return encryptPassword;
}();

UserSchema.methods.validatePassword =
/*#__PURE__*/
function () {
  var _validatePassword = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(password) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _bcrypt["default"].compare(password, this.password));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  function validatePassword(_x3) {
    return _validatePassword.apply(this, arguments);
  }

  return validatePassword;
}(); // eslint-disable-next-line new-cap


var User = new _mongoose["default"].model('User', UserSchema);
var _default = User;
exports["default"] = _default;