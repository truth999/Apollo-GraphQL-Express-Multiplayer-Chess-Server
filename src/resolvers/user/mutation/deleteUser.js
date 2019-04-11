import { combineResolvers } from 'graphql-resolvers';
import { isAdmin } from '../../auth';

/**
 * Delete user account
 * @param {String} id
 * @return {Boolean} accountDeleted
 */
export default combineResolvers(isAdmin, async (parent, { id }, { models }) => {
  const user = await models.User.findById(id);

  if (user) {
    await user.remove();
    return true;
  }

  return false;
});
