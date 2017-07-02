import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import { RootContainer } from 'containers';

const store = configureStore({
    interests: [
    ],
    isAuthenticated: false
});

const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <RootContainer store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root'),
);

if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/Root/Root', () => {
        const NewRoot = require('containers').RootContainer;
        render(
            <AppContainer>
                <NewRoot store={store} history={history}/>
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
