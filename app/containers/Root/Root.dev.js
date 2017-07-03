import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'routes';
import { DevToolsContainer } from 'containers';

export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
                    { window.devToolsExtension ? null : <DevToolsContainer /> }
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
