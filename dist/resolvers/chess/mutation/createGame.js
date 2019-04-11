"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _chess = require("chess.js");

var _utils = require("../utils");

var _auth = require("../../auth");

/**
 * Create chess game
 * @return {Object} game
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAuthenticated,
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, args, _ref) {
    var models, authenticatedUser, games, chess, fen, pgn, playerColors;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            models = _ref.models, authenticatedUser = _ref.authenticatedUser;
            _context.next = 3;
            return models.Chess.find({
              started: false,
              playerOneID: authenticatedUser.id
            });

          case 3:
            games = _context.sent;

            if (!(games.length > 1)) {
              _context.next = 6;
              break;
            }

            throw new Error("You can't have more than 1 open game.");

          case 6:
            chess = new _chess.Chess();
            fen = chess.fen();
            pgn = chess.pgn();
            playerColors = (0, _utils.randomizePlayerColors)();
            return _context.abrupt("return", models.Chess.create({
              playerOneID: authenticatedUser.id,
              playerOneColor: playerColors[0],
              playerTwoColor: playerColors[1],
              startDate: new Date(),
              started: false,
              fen: fen,
              pgn: pgn,
              gameOver: false
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}());

exports["default"] = _default;