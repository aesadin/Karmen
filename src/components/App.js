import React from 'react';
import AppControl from "./AppControl";
import Header from "./Header";
import Signin from "./Signin";
import SignOut from "./SignOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/signOunt'>
              <SignOut />
          </Route>
          <Route path='/'>
              <AppControl />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;