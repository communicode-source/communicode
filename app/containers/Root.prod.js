import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-99526899-1');

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const pageUpdate = () => {
    window.scrollTo(0, 0);
    if(process.env.NODE_ENV === 'production' && window.location.hostname === 'communicode.co') {
        logPageView();
    }
};

export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} onUpdate={pageUpdate}/>
            </Provider>
        );
    }
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
