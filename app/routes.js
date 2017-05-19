import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
// import FilterableTable from './containers/FilterableTable';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Developers from './components/pages/Developer';
import Nonprofits from './components/pages/Nonprofit';

export default (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/developers" component={Developers} />
        <Route path="/nonprofits" component={Nonprofits} />
    </Route>
);
