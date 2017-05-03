import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
// import FilterableTable from './containers/FilterableTable';
import About from './components/pages/About';
import Home from './components/pages/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
);
