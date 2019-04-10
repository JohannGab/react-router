import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Component/Home';
import History from './Component/History';

import Nav from './Component/Nav.css';


class App extends Component {
  render() {
    return (
  
<BrowserRouter>
  <div>
   <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
   <NavLink to="/History" activeClassName="selected"> Contact </NavLink>  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/History" component={History} />
    </Switch>
  </div>
  </BrowserRouter>
    );
  }
}

export default App;
