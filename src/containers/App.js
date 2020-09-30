import React, { Component } from 'react';
import Header from "../Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FundControl from "../FundControl";

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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          {/* <Route path="/signout" exact component={Signout} /> */}
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/" component={FundControl} />
        </Switch>
      </Router>
    );
  }
}

export default App;
