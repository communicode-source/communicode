import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';

import { App } from 'containers';
import routes from 'routes';

export default class Root extends React.Component {
  render() {
    const { client, store, history, Router } = this.props;
    return (
      <ApolloProvider client={client} store={store} key="provider">
        <Router history={history}>
          <App>
            { routes }
          </App>
        </Router>
      </ApolloProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  Router: PropTypes.func.isRequired
};
