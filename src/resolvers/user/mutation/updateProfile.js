import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../auth';

/**
 * Update user account info
 * @param {String} firstName
 * @param {String} lastName
 * @return {Object} user
 */
export default combineResolvers(
  isAuthenticated,
  async (parent, { firstName, lastName }, { models, authenticatedUser }) => {
    return models.User.findByIdAndUpdate(
      authenticatedUser.id,
      { firstName, lastName },
      { new: true }
    );
  }
);
