"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * Player two user
 * @return {Object} User
 */
var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(chessGame, args, _ref) {
    var models;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            models = _ref.models;

            if (!chessGame.playerTwoID) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", models.User.findById(chessGame.playerTwoID));

          case 3:
            return _context.abrupt("return", null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;