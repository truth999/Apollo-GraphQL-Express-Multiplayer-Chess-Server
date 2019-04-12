/**
 * Player two user
 * @return {Object} User
 */
export default async (chessGame, args, { models }) => {
  return models.User.findById(chessGame.playerTwoID).select('-email');
};
