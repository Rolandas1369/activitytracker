import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axiosInstance  from './axios';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';

function App() {

  return (

    <Router>
    <Switch>
      <Route path='/login'>
        <Login></Login>
        </Route>
        <Route path='/'>
          <HomePage></HomePage>
        </Route>
    </Switch>
    
  </Router>

  );
}

export default App;
