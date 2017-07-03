import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { AuthContainer } from 'containers';
// import { AboutPage, InterestsPage, HomePage, ProfilePage, DevelopersPage, NonprofitsPage, NotFoundPage } from 'components';
import { HomePage } from 'components';
// import ProjectFeed from './containers/ProjectFeedContainer';

// For some reason when I use the import from containers, this is null...
import AppContainer from './containers/App/App';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={AppContainer}>
        <IndexRoute component={HomePage}/>

        { /*
        <Route path="/home" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/developers" component={DevelopersPage} />
        <Route path="/nonprofits" component={NonprofitsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={AuthContainer}>
            <Route path="/interests" component={InterestsPage} />
            <Route path="/feed" component={DevelopersPage} />
        </Route>
        <Route path="*" component={NotFoundPage} notFound />
        */ }
    </Route>
);

export default routes;
