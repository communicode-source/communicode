import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Developers from './components/pages/Developer';
import Nonprofits from './components/pages/Nonprofit';
import NotFoundPage from './components/pages/NotFound';
import ProjectFeed from './containers/ProjectFeedContainer';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/developers" component={Developers} />
        <Route path="/nonprofits" component={Nonprofits} />
        <Route path="/feed" component={ProjectFeed} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;
