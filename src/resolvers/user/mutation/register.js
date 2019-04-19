import { createJwtToken } from '../utils';

const START_ELO_RATING = 1200;

/**
 * Create user account
 * @param {String} username
 * @param {String} email
 * @param {String} password
 * @param {String} firstName
 * @param {String} lastName
 * @return {String} jwtToken
 */
export default async (
  parent,
  { username, email, password, firstName, lastName },
  { models, secret }
) => {
  const user = await models.User.create({
    username,
    email,
    password,
    firstName,
    lastName,
    eloRating: START_ELO_RATING
  });

  return { token: createJwtToken(user, secret, '7d') };
};
