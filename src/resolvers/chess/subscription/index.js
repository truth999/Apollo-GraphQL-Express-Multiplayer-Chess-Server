import { withFilter } from 'apollo-server';

import pubsub from '../../../subscriptions';

const Subscription = {
  chessMoveMade: {
    subscribe: withFilter(
      () => pubsub.asyncIterator('chessMoveMade'),
      ({ chessMoveMade }, { id }, { authenticatedUser }) => {
        const gameId = chessMoveMade.id.toString();
        const userId = authenticatedUser.id.toString();
        const playerOneId = chessMoveMade.playerOneID.toString();
        const playerTwoId = chessMoveMade.playerTwoID.toString();
        return gameId === id.toString() && (userId === playerOneId || userId === playerTwoId);
      }
    )
  }
};

export default Subscription;
