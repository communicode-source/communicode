import React, { PropTypes } from 'react';
import Header from './static/Header';
import Footer from './static/Footer';

const App = ({ children }) =>
    <div>
        <Header />
        { children }
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
