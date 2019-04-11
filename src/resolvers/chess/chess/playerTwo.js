/**
 * Player two user
 * @return {Object} User
 */
export default async (chessGame, args, { models }) => {
  if (chessGame.playerTwoID) {
    return models.User.findById(chessGame.playerTwoID);
  }
  return null;
};
