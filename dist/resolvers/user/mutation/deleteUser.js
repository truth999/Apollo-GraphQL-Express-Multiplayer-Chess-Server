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
 * Delete user account
 * @param {String} id
 * @return {Boolean} accountDeleted
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAdmin,
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var id, models, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id;
            models = _ref2.models;
            _context.next = 4;
            return models.User.findById(id);

          case 4:
            user = _context.sent;

            if (!user) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return user.remove();

          case 8:
            return _context.abrupt("return", true);

          case 9:
            return _context.abrupt("return", false);

          case 10:
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