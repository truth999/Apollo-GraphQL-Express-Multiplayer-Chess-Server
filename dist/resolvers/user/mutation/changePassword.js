"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _graphqlResolvers = require("graphql-resolvers");

var _auth = require("../../auth");

/**
 * Change account password
 * @param {String} oldPassword
 * @param {String} newPassword
 * @return {Boolean}
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAuthenticated,
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var oldPassword, newPassword, models, authenticatedUser, user, isPasswordValid;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            oldPassword = _ref.oldPassword, newPassword = _ref.newPassword;
            models = _ref2.models, authenticatedUser = _ref2.authenticatedUser;
            _context.next = 4;
            return models.User.findById(authenticatedUser.id);

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            throw new Error('User not found');

          case 7:
            _context.next = 9;
            return user.validatePassword(oldPassword);

          case 9:
            isPasswordValid = _context.sent;

            if (isPasswordValid) {
              _context.next = 12;
              break;
            }

            throw new _apolloServer.UserInputError('Invalid password');

          case 12:
            user.password = newPassword;
            _context.next = 15;
            return user.save();

          case 15:
            return _context.abrupt("return", true);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}());

exports["default"] = _default;