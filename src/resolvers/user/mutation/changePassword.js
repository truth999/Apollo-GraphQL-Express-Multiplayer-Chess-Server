import { UserInputError } from 'apollo-server';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../auth';

/**
 * Change account password
 * @param {String} oldPassword
 * @param {String} newPassword
 * @return {Boolean}
 */
export default combineResolvers(
  isAuthenticated,
  async (parent, { oldPassword, newPassword }, { models, authenticatedUser }) => {
    const user = await models.User.findById(authenticatedUser.id);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await user.validatePassword(oldPassword);
    if (!isPasswordValid) {
      throw new UserInputError('Invalid password');
    }

    user.password = newPassword;
    await user.save();
    return true;
  }
);
