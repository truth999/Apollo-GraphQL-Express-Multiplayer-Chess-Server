/**
 * Winner user
 * @return {Object} User
 */
export default async (chessGame, args, { models }) => {
  console.log(chessGame.winnerID);
  return models.User.findById(chessGame.winnerID);
};
