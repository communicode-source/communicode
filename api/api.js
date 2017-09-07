import Express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import config from '../src/config';
import { types, resolvers } from './schema';

require('pretty-error').start();

const app = new Express();

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(types),
  rootValue: resolvers,
  graphiql: __DEVELOPMENT__
}));

if(config.apiPort) {
  app.listen(config.apiPort, (err) => {
    if(err) {
      console.error(err);
    }
    console.info('API running on port %s', config.apiPort);
  });
}
