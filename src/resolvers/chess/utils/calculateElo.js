/**
 * Calculte player ELO rating after match
 */
export default ({ playerRating, opponentRating, victory }) => {
  // K - factor
  let K = 32;
  if (playerRating >= 2100 && playerRating <= 2400) {
    K = 24;
  } else if (playerRating > 2400) {
    K = 16;
  }

  // Calculate new ELO rating
  const winProbability = 1 / (1 + 10 ** ((opponentRating - playerRating) / 400));
  const newRating = playerRating + K * (victory - winProbability);

  return Math.round(newRating * 100) / 100;
};
