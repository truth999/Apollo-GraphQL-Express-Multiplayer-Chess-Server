"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _utils = require("../utils");

/**
 * Create user account
 * @param {String} username
 * @param {String} email
 * @param {String} password
 * @param {String} firstName
 * @param {String} lastName
 * @return {String} jwtToken
 */
var _default =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var username, email, password, firstName, lastName, models, secret, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, email = _ref.email, password = _ref.password, firstName = _ref.firstName, lastName = _ref.lastName;
            models = _ref2.models, secret = _ref2.secret;
            _context.next = 4;
            return models.User.create({
              username: username,
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName
            });

          case 4:
            user = _context.sent;
            return _context.abrupt("return", {
              token: (0, _utils.createJwtToken)(user, secret, '7d')
            });

          case 6:
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