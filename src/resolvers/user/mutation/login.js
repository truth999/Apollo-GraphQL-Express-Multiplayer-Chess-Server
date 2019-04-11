import { AuthenticationError, UserInputError } from 'apollo-server';
import { createJwtToken } from '../utils';

/**
 * Authenticate user
 * @param {String} username
 * @param {String} password
 * @return {String} jwtToken
 */
export default async (parent, { username, password }, { models, secret }) => {
  const user = await models.User.findByUsernameOrEmail(username);
  if (!user) {
    throw new UserInputError('Invalid login credentials');
  }

  const isPasswordValid = await user.validatePassword(password);
  if (!isPasswordValid) {
    throw new AuthenticationError('Invalid password');
  }

  return { token: createJwtToken(user, secret, '7d') };
};
