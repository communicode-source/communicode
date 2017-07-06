import React, { PropTypes } from 'react';
import Header from './static/Header';
import Footer from './static/Footer';
import Title from 'react-title-component';

import main from '../assets/css/main.scss';

const App = ({children}) =>
    <div className={main['app-container']}>
        <Title render="Communicode"/>
        <Header />
        <div id={main['content-main']}>
            {children}
            <div className={main.push}/>
        </div>
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
