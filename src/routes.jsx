import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Home, NotFound, Users } from 'components/pages/index';

export default (
  <Switch>
    <Redirect exact from="/redirect" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route component={NotFound} />
  </Switch>
);

