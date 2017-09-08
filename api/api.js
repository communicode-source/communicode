import Express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import './loaders';

import config from '../src/config';
import schema from './schema';

require('pretty-error').start();

const app = new Express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  debug: __DEVELOPMENT__
}));

if(__DEVELOPMENT__) {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}

if(config.apiPort) {
  app.listen(config.apiPort, (err) => {
    if(err) {
      console.error(err);
    }
    console.info('API running on port %s', config.apiPort);
  });
}
