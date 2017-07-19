import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import pushStateToStorage from './middleware/storeInLocalStorage';
import Root from './containers/Root';


const initialState = (localStorage.getItem('profile') !== null)
    ? {
        user: {
            profile: JSON.parse(localStorage.getItem('profile'))
        }
    } : {};

initialState.isAuthenticated = (localStorage.getItem('id_token') !== null && localStorage.getItem('profile') !== null) ? true : false;

const store = configureStore(initialState);

store.subscribe(() => {
    pushStateToStorage(store.getState());
});

const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root'),
);

if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history}/>
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
