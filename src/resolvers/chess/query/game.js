/**
 * Query all games
 */
export default async (parent, { id }, { models }) => {
  return models.Chess.findById(id);
};
