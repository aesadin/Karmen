import React from "react";
import AppControl from "./AppControl";
import SignInPage from "./SignInPage";
import Signup from "./Signup";
import Signin from "./Signin";
import Logout from "./Logout";
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App (){
  return ( 
    <Router>
        <Switch>
        <Route path='/signin'>
            <SignInPage />
        </Route>
        <Route path='/'>
              <AppControl />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/logout'>
              <Logout />
          </Route>
        </Switch>
    </Router>
  );
}



// the AppControl component should also probably be wrapped in the withAuthentication because that is where all the functionality happens
// the landing board can be the dashboard where a swipe functionality shows diffrent fundraisers and allows users to search based on location and tags
// but only logged in users can add a fundraiser to the list and verify other fundraisers

export default App;
