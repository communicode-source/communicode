import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/AppContainer';

import Auth from './containers/AuthContainer';
import About from './components/pages/About';
import Interests from './components/pages/Interests';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import PasswordRecovery from './components/pages/PasswordRecovery';
import Developers from './components/pages/Developer';
import Nonprofits from './components/pages/Nonprofit';
import Search from './components/pages/Search';
import NotFoundPage from './components/pages/NotFound';
// import ProjectFeed from './containers/ProjectFeedContainer';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/developers" component={Developers} />
        <Route path="/nonprofits" component={Nonprofits} />
        <Route path="/profile" component={Profile} />
        <Route path="/forgot" component={PasswordRecovery} />
        <Route path="/search" component={Search} />
        <Route component={Auth}>
            <Route path="/interests" component={Interests} />
            <Route path="/feed" component={Developers} />
        </Route>
        <Route path="*" component={NotFoundPage} notFound />
    </Route>
);

export default routes;
