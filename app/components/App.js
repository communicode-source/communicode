import React, { PropTypes } from 'react';
import Header from './static/Header';
import Footer from './static/Footer';
import SubscribeComponent from './layout/SubscribeComponent';

const App = ({children}) =>
    <div>
        <Header />
        {children}
        <SubscribeComponent />
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
