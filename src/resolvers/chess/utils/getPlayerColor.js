/**
 * Get autenticated player color
 * @param {Object} player
 * @param {Object} game
 * @return {String} color - 'w', 'b' or null
 */
export default (player, game) => {
  const { playerOneID, playerTwoID, playerOneColor, playerTwoColor } = game;

  let color = null;
  if (playerOneID.equals(player.id)) {
    color = playerOneColor;
  } else if (playerTwoID.equals(player.id)) {
    color = playerTwoColor;
  }

  return color;
};
