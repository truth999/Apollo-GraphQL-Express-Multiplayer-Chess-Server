"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _utils = require("../utils");

/**
 * Authenticate user
 * @param {String} username
 * @param {String} password
 * @return {String} jwtToken
 */
var _default =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var username, password, models, secret, user, isPasswordValid;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, password = _ref.password;
            models = _ref2.models, secret = _ref2.secret;
            _context.next = 4;
            return models.User.findByUsernameOrEmail(username);

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            throw new _apolloServer.UserInputError('Invalid login credentials');

          case 7:
            _context.next = 9;
            return user.validatePassword(password);

          case 9:
            isPasswordValid = _context.sent;

            if (isPasswordValid) {
              _context.next = 12;
              break;
            }

            throw new _apolloServer.AuthenticationError('Invalid password');

          case 12:
            return _context.abrupt("return", {
              token: (0, _utils.createJwtToken)(user, secret, '7d')
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;