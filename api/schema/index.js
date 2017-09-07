import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import user from './user/user';
import messaging from './messaging/messaging';

const schemaTypes = [user, messaging];

export const types = mergeTypes(schemaTypes.map(schema => schema.types));
export const resolvers = mergeResolvers(schemaTypes.map(schema => schema.resolvers));
