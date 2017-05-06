import React, { PropTypes } from 'react';
import Header from './static/Header';
import Footer from './static/Footer';
import SubscriptionContainer from '../containers/SubscriptionContainer';

const App = ({children}) =>
    <div>
        <Header />
        {children}
        <SubscriptionContainer />
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
