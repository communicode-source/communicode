import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/AppContainer';

import Auth from './containers/AuthContainer';
import About from './components/pages/About';
import Interests from './components/pages/Interests';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import PasswordRecovery from './components/pages/PasswordRecovery';
import Developers from './components/pages/Developer';
import Nonprofits from './components/pages/Nonprofit';
import Search from './components/pages/Search';
import NotFoundPage from './components/pages/NotFound';
import newProjectStepOne from './components/pages/newProjectStepOne';
import newProjectStepTwo from './components/pages/newProjectStepTwo';
import newProjectStepThree from './components/pages/newProjectStepThree';
import newProjectStepFour from './components/pages/newProjectStepFour';
// import ProjectFeed from './containers/ProjectFeedContainer';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/developers" component={Developers} />
        <Route path="/nonprofits" component={Nonprofits} />
        <Route path="/forgot" component={PasswordRecovery} />
        <Route path="/search" component={Search} />
        <Route path="/newproject/one" component={newProjectStepOne} />
        <Route path="/newproject/two" component={newProjectStepTwo} />
        <Route path="/newproject/three" component={newProjectStepThree} />
        <Route path="/newproject/four" component={newProjectStepFour} />
        <Route component={Auth}>
            <Route path="/interests" component={Interests} />
            <Route path="/feed" component={Developers} />
            <Route path="/me/settings" component={Settings} />
        </Route>
        <Route path="/:url" component={Profile} />
        <Route path="*" component={NotFoundPage} notFound />
    </Route>
);

export default routes;
