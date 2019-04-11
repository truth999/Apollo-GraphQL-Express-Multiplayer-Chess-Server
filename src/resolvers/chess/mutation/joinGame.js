import { combineResolvers } from 'graphql-resolvers';
import { ObjectID } from 'mongodb';

import { isAuthenticated } from '../../auth';
import pubsub from '../../../subscriptions';

/**
 * Join chess game
 * @param {String} id
 * @return {Object} game
 */
export default combineResolvers(
  isAuthenticated,
  async (parent, { id }, { models, authenticatedUser }) => {
    const game = await models.Chess.findById(id);
    if (!game) {
      throw new Error('Game not found');
    }

    if (game.playerTwoID instanceof ObjectID) {
      if (game.playerTwoID.equals(authenticatedUser.id)) {
        throw new Error('You already joined this game');
      }
      throw new Error('Game is already full');
    }

    game.playerTwoID = authenticatedUser.id;
    game.started = true;

    // Publish subscription event
    pubsub.publish('chessMoveMade', {
      chessMoveMade: game
    });

    return game.save();
  }
);
