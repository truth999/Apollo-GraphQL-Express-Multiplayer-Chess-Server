"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _auth = require("../../auth");

/**
 * Update user account info
 * @param {String} firstName
 * @param {String} lastName
 * @return {Object} user
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAuthenticated,
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var firstName, lastName, models, authenticatedUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            firstName = _ref.firstName, lastName = _ref.lastName;
            models = _ref2.models, authenticatedUser = _ref2.authenticatedUser;
            return _context.abrupt("return", models.User.findByIdAndUpdate(authenticatedUser.id, {
              firstName: firstName,
              lastName: lastName
            }, {
              "new": true
            }));

          case 3:
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