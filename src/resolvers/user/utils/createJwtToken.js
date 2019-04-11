import jwt from 'jsonwebtoken';

/**
 * Creates JWT token
 */
export default async (user, secret, expiresIn) => {
  const { id, email, username, role } = user;
  return jwt.sign({ id, email, username, role }, secret, { expiresIn });
};
