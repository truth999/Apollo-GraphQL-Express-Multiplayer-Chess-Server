/**
 * Query single user by ID
 */
export default async (parent, { id }, { models }) => {
  return models.User.findById(id);
};
