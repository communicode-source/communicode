import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { ApolloClient } from 'react-apollo';

import RootContainer from './containers/Root/Root';
import createStore from './redux/create';

const reactRoot = document.getElementById('app');
const history = createBrowserHistory();
const apiClient = new ApolloClient({
  initialState: { apollo: window.__PRELOADED_STATE__.apollo }
});
const store = createStore(history, apiClient, window.__PRELOADED_STATE__);

const renderRootElement = (Container) => {
  ReactDOM.render(
    <AppContainer>
      <Container client={apiClient} store={store} history={history} Router={ConnectedRouter} />
    </AppContainer>,
    reactRoot
  );
};

renderRootElement(RootContainer);

if(process.env.NODE_ENV !== 'production') {
  window.React = React;
}

if(__DEVELOPMENT__ && __CLIENT__ && module.hot) {
  module.hot.accept('./containers/Root/Root.jsx', () => {
    const NewRootContainer = require('./containers/Root/Root.jsx');
    renderRootElement(NewRootContainer);
  });
}
