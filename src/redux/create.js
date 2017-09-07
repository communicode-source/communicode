import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export default (history, apiClient, data) => {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [reduxRouterMiddleware];

  let finalCreateStore;
  if(__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools/DevTools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  }
  else {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  }

  const reducer = require('./modules/reducer')(apiClient);
  const store = finalCreateStore(reducer, data);
  if(__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
};
