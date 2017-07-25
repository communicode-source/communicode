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
import newProjectReview from './components/pages/newProjectReview';
import ProjectFeed from './containers/feed/MainFeed';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/developers" component={Developers} />
        <Route path="/nonprofits" component={Nonprofits} />
        <Route path="/forgot" component={PasswordRecovery} />
        <Route path="/search" component={Search} />
        <Route component={Auth}>
            <Route path="/project/step/1" component={newProjectStepOne} />
            <Route path="/project/step/2" component={newProjectStepTwo} />
            <Route path="/project/step/3" component={newProjectStepThree} />
            <Route path="/project/step/4" component={newProjectStepFour} />
            <Route path="/project/review" component={newProjectReview} />
            <Route path="/interests" component={Interests} />
            <Route path="/me/feed" component={ProjectFeed} />
            <Route path="/me/settings" component={Settings} />
        </Route>
        <Route path="/:url" component={Profile} />
        <Route path="/404" component={NotFoundPage} notFound />
        <Route path="*" component={NotFoundPage} notFound />
    </Route>
);

export default routes;
