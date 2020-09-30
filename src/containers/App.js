import React, { Component } from 'react';
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppControl from "../components/AppControl";

import Signin from '../components/Signin';
// import Signout from '../components/Signout';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';


import '../App.css';

// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <FundControl />
//     </React.Fragment>
//   );
// }

export default App;

class App extends Component { // decide if you want NON-signed in user to be able to head to dashboard which might be like fund list except with no functionality? just displays random fundraisers
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          {/* <Route path="/signout" exact component={Signout} /> */}
          <Route path="/" component={withAuthentication(Dashboard)} />
          <Route path="/appControl" component={AppControl} />
        </Switch>
      </Router>
    );
  }
}

// the AppControl component should also probably be wrapped in the withAuthentication because that is where all the functionality happens
// the landing board can be the dashboard where a swipe functionality shows diffrent fundraisers and allows users to search based on location and tags
// but only logged in users can add a fundraiser to the list and verify other fundraisers

export default App;
