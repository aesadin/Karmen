import React, { Component } from 'react';
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "../components/About";

import Signin from '../components/Signin';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';


import './App.css';


class App extends Component { // decide if you want NON-signed in user to be able to head to dashboard which might be like fund list except with no functionality? just displays random fundraisers
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          {/* <Route path="/signout" exact component={Signout} /> */}
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

// the AppControl component should also probably be wrapped in the withAuthentication because that is where all the functionality happens
// the landing board can be the dashboard where a swipe functionality shows diffrent fundraisers and allows users to search based on location and tags
// but only logged in users can add a fundraiser to the list and verify other fundraisers

export default App;
