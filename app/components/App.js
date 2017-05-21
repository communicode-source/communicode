import React, { PropTypes } from 'react';
import Header from './static/Header';
import Footer from './static/Footer';
import SubscribeComponent from './layout/SubscribeComponent';

import main from '../assets/css/main.scss';

const App = ({children}) =>
    <div id={main['app-container']}>
        <Header />
        <div id={main['content-main']}>{children}</div>
        <SubscribeComponent />
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
