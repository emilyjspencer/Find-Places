import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Users from './users/pages/Users';
import Test from './places/components/Test';
import Test2 from './shared/components/Test2';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/shared">
            <Test2 />
        </Route>
        <Redirect to="/" />
        </Switch>
      </Router>
    </Fragment>
  ); 
};

export default App;
