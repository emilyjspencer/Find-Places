import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Users from './users/pages/Users';
import Test from './places/components/Test';
import Test2 from './shared/components/Test2';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact>
          <Users />
            <Test />
            <Test2 />
        </Route>
      </Router>
    </Fragment>
  ); 
};

export default App;
