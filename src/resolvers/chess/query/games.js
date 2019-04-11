/**
 * Query single game by ID
 */
export default async (parent, args, { models }) => {
  return models.Chess.find();
};
