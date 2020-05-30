import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Users from './users/pages/Users';
import Test from './listings/components/Test';
import Test2 from './shared/components/Test2';
import NewListing from './listings/pages/NewListing';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserListings from './listings/pages/UserListings';

const App = () => {
  return (
    <Fragment>
      <Router>
        <MainNavigation /> 
        <main>
        <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/listings" exact>
          <UserListings />
        </Route>
        <Route path="/listings/new" exact>
          <NewListing />
        </Route>
        <Route path="/shared">
            <Test2 />
        </Route>
        <Redirect to="/" />
        </Switch>
        </main>
      </Router>
    </Fragment>
  ); 
};

export default App;
