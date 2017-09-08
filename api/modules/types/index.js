import {
  GraphQLEmail,
  GraphQLURL,
  GraphQLDateTime,
  // GraphQLLimitedString,
  // GraphQLPassword,
  GraphQLUUID
} from 'graphql-custom-types';

const typeDefs = require('./types.graphqls');

const resolvers = {
  Email: GraphQLEmail,
  URL: GraphQLURL,
  DateTime: GraphQLDateTime,
  // The next two require type arguments, and those can't be defined in .graphqls files, so they are left out here
  // LimitedString: GraphQLLimitedString,
  // Password: GraphQLPassword,
  UUID: GraphQLUUID
};

export const modules = [{
  typeDefs,
  resolvers
}];
