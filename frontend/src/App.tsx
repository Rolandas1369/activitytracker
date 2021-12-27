import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';
import Header from './components/header/header';
import Order from './components/orders/order';
function App() {

  return (

    <Router>
      <Header></Header>
    <Switch>
        <Route path='/homepage'>
          <HomePage></HomePage>
        </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='/orders'>
        <Order></Order>
      </Route>
    </Switch>
    
  </Router>

  );
}

export default App;
