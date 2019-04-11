/**
 * Query currently authenticated user (yourself)
 */
export default async (parent, args, { models, authenticatedUser }) => {
  if (!authenticatedUser) {
    return null;
  }
  return models.User.findById(authenticatedUser.id);
};
