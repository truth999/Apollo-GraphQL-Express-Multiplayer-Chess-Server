import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';
import isAuthenticated from './isAuthenticated';

export default combineResolvers(isAuthenticated, (parent, args, { authenticatedUser }) => {
  if (authenticatedUser.role !== 'ADMIN') {
    return new ForbiddenError('Not authorized as admin.');
  }
  return skip;
});
