import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';

function App() {

  return (

    <Router>
      <Link to='/login'>
        <h1>Login</h1>
      </Link>
      <Link to='/homepage'>
        <h1>Homepage</h1>
      </Link>
    <Switch>
        <Route path='/homepage'>
          <HomePage></HomePage>
        </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
    </Switch>
    
  </Router>

  );
}

export default App;
