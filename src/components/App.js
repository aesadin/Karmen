import React from "react";
import AppControl from "./AppControl";
import SignInPage from "./SignInPage";
import Signup from "./Signup";
import Signin from "./Signin";
import About from "./About";

import '../styles/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App (){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <AppControl />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}





export default App;
