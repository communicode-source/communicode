import User from './User';

const typeDefs = require('./User.graphqls');

const resolvers = {
  Query: {
    // Placehodler
    user: async () => new User({ accountType: 'NONPROFIT', email: 'ideafarm@gmail.com', firstname: 'Joel', lastname: 'Bruns' })
  }
};

/*
  Can also export submodules. Say you had a submodule for UserPreferences.
  You could `import UserPreferences, { modules as userPreferencesModules} from './userpreferences';` and then
  `export const modules = [...userPreferencesModules, { typeDefs, resolvers}]`
  In the end, all that's required by graphql-schema-modules is an array of modules, so we're keeping like that this way
 */
export const modules = [{
  typeDefs,
  resolvers
}];

export User from './User';
