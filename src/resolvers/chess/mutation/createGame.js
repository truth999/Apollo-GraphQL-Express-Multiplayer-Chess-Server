import { combineResolvers } from 'graphql-resolvers';
import { Chess } from 'chess.js';

import { randomizePlayerColors } from '../utils';
import { isAuthenticated } from '../../auth';

/**
 * Create chess game
 * @return {Object} game
 */
export default combineResolvers(
  isAuthenticated,
  async (parent, args, { models, authenticatedUser }) => {
    const games = await models.Chess.find({
      started: false,
      playerOneID: authenticatedUser.id
    });

    if (games.length > 1) {
      throw new Error(`You can't have more than 1 open game.`);
    }

    const chess = new Chess();
    const fen = chess.fen();
    const pgn = chess.pgn();
    const playerColors = randomizePlayerColors();

    return models.Chess.create({
      playerOneID: authenticatedUser.id,
      playerOneColor: playerColors[0],
      playerTwoColor: playerColors[1],
      startDate: new Date(),
      started: false,
      fen,
      pgn,
      gameOver: false
    });
  }
);
