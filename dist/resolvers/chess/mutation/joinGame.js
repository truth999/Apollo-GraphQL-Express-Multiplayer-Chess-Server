"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _mongodb = require("mongodb");

var _auth = require("../../auth");

var _subscriptions = _interopRequireDefault(require("../../../subscriptions"));

/**
 * Join chess game
 * @param {String} id
 * @return {Object} game
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAuthenticated,
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var id, models, authenticatedUser, game;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id;
            models = _ref2.models, authenticatedUser = _ref2.authenticatedUser;
            _context.next = 4;
            return models.Chess.findById(id);

          case 4:
            game = _context.sent;

            if (game) {
              _context.next = 7;
              break;
            }

            throw new Error('Game not found');

          case 7:
            if (!(game.playerTwoID instanceof _mongodb.ObjectID)) {
              _context.next = 11;
              break;
            }

            if (!game.playerTwoID.equals(authenticatedUser.id)) {
              _context.next = 10;
              break;
            }

            throw new Error('You already joined this game');

          case 10:
            throw new Error('Game is already full');

          case 11:
            game.playerTwoID = authenticatedUser.id;
            game.started = true; // Publish subscription event

            _subscriptions["default"].publish('chessMoveMade', {
              chessMoveMade: game
            });

            return _context.abrupt("return", game.save());

          case 15:
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