/**
 * Query all users
 */
export default async (parent, args, { models }) => {
  return models.User.find();
};
