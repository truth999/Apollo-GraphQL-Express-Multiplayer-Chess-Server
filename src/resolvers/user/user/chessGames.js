/**
 * User chess games
 * @return {Array} Chess games
 */
export default async (user, args, { models }) => {
  return models.Chess.find({
    $or: [
      {
        playerOneID: user.id
      },
      {
        playerTwoID: user.id
      }
    ]
  });
};
