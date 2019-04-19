/**
 * Query single game by ID
 */
export default async (parent, { filter, limit = 0, offset = 0 }, { models }) => {
  const queryFilter = {};

  if (filter) {
    queryFilter.$and = [];
    const { playerID, winnerID, started, gameOver } = filter;

    // Filter by participating playerID
    if (typeof playerID !== 'undefined') {
      queryFilter.$and.push({
        $or: [{ playerOneID: playerID }, { playerTwoID: playerID }]
      });
    }

    // Filter by winnerID
    if (typeof winnerID !== 'undefined') {
      queryFilter.$and.push({
        winnerID
      });
    }

    // Filter by game started
    if (typeof started !== 'undefined') {
      queryFilter.$and.push({
        started
      });
    }

    // Filter by gameOver
    if (typeof gameOver !== 'undefined') {
      queryFilter.$and.push({
        gameOver
      });
    }
  }

  return models.Chess.find(queryFilter)
    .skip(offset)
    .limit(limit);
};
