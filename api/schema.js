import { mergeModules, loadModules } from 'graphql-schema-modules';
import { makeExecutableSchema } from 'graphql-tools';
import { modules } from './modules';

// console.log(modules);
const { typeDefs, resolvers } = mergeModules(modules);

const schema = makeExecutableSchema(mergeModules(modules));

export default schema;
