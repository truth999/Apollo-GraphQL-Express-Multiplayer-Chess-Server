import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

export default (parent, args, { authenticatedUser }) => {
  if (!authenticatedUser) {
    return new ForbiddenError('User not authenticated.');
  }
  return skip;
};
