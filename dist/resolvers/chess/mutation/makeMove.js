"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _apolloServer = require("apollo-server");

var _chess = require("chess.js");

var _utils = require("../utils");

var _auth = require("../../auth");

var _subscriptions = _interopRequireDefault(require("../../../subscriptions"));

/**
 * Make a move in chess game
 * @param {String} id
 * @param {String} piece
 * @param {String} to
 * @return {Object} game
 */
var _default = (0, _graphqlResolvers.combineResolvers)(_auth.isAuthenticated,
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
    var id, move, models, authenticatedUser, game, playerColor, chess, currentTurnColor, moveMade, loserColor;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id, move = _ref.move;
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
            if (!(game.started === false)) {
              _context.next = 9;
              break;
            }

            throw new Error('Game not started yet');

          case 9:
            if (!(game.completed === true)) {
              _context.next = 11;
              break;
            }

            throw new Error('Game already completed');

          case 11:
            // Validate player color (returns null if user is not a player in current game)
            playerColor = (0, _utils.getPlayerColor)(authenticatedUser, game);

            if (!(playerColor === null)) {
              _context.next = 14;
              break;
            }

            throw new _apolloServer.AuthenticationError('Not authorized to make moves in current game');

          case 14:
            // Initialize chess.js game
            chess = new _chess.Chess(game.fen);
            chess.load_pgn(game.pgn); // Validate turn

            currentTurnColor = chess.turn();

            if (!(playerColor !== currentTurnColor)) {
              _context.next = 19;
              break;
            }

            throw new _apolloServer.UserInputError('Not your turn');

          case 19:
            moveMade = chess.move(move);

            if (!(moveMade === null)) {
              _context.next = 22;
              break;
            }

            throw new Error('Invalid move');

          case 22:
            // Update game
            game.fen = chess.fen();
            game.pgn = chess.pgn();
            game.gameOver = chess.game_over();

            if (game.gameOver === true) {
              game.endDate = new Date();

              if (chess.in_checkmate()) {
                game.victoryType = 'checkmate'; // Record game winner

                loserColor = chess.turn();
                game.winnerID = game.playerOneColor === loserColor ? game.playerTwoID : game.playerOneID;
              } else if (chess.in_draw()) {
                game.victoryType = 'draw';
              } else if (chess.in_stalemate()) {
                game.victoryType = 'stalemate';
              } else if (chess.in_threefold_repetition()) {
                game.victoryType = 'threefold_repetition';
              } else if (chess.insufficient_material()) {
                game.victoryType = 'insufficient_material';
              }
            } // Publish subscription event


            _subscriptions["default"].publish('chessMoveMade', {
              chessMoveMade: game
            });

            return _context.abrupt("return", game.save());

          case 28:
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