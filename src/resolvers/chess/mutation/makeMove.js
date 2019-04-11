import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { Chess } from 'chess.js';

import { getPlayerColor } from '../utils';
import { isAuthenticated } from '../../auth';
import pubsub from '../../../subscriptions';

/**
 * Make a move in chess game
 * @param {String} id
 * @param {String} piece
 * @param {String} to
 * @return {Object} game
 */
export default combineResolvers(
  isAuthenticated,
  async (parent, { id, move }, { models, authenticatedUser }) => {
    const game = await models.Chess.findById(id);

    // Validate game
    if (!game) {
      throw new Error('Game not found');
    }
    if (game.started === false) {
      throw new Error('Game not started yet');
    }
    if (game.completed === true) {
      throw new Error('Game already completed');
    }

    // Validate player color (returns null if user is not a player in current game)
    const playerColor = getPlayerColor(authenticatedUser, game);
    if (playerColor === null) {
      throw new AuthenticationError('Not authorized to make moves in current game');
    }

    // Initialize chess.js game
    const chess = new Chess(game.fen);
    chess.load_pgn(game.pgn);

    // Validate turn
    const currentTurnColor = chess.turn();
    if (playerColor !== currentTurnColor) {
      throw new UserInputError('Not your turn');
    }

    const moveMade = chess.move(move);
    if (moveMade === null) {
      throw new Error('Invalid move');
    }

    // Update game
    game.fen = chess.fen();
    game.pgn = chess.pgn();
    game.gameOver = chess.game_over();

    if (game.gameOver === true) {
      if (chess.in_checkmate()) {
        game.victoryType = 'checkmate';
      } else if (chess.in_draw()) {
        game.victoryType = 'draw';
      } else if (chess.in_stalemate()) {
        game.victoryType = 'stalemate';
      } else if (chess.in_threefold_repetition()) {
        game.victoryType = 'threefold_repetition';
      } else if (chess.insufficient_material()) {
        game.victoryType = 'insufficient_material';
      }
    }

    // Publish subscription event
    pubsub.publish('chessMoveMade', {
      chessMoveMade: game
    });

    return game.save();
  }
);
