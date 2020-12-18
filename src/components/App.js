import React from "react";
import AppControl from "./AppControl";
import Signup from "./Signup";
import Signin from "./Signin";


import '../styles/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logout from "./Logout";



function App (){
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/logout">
        <Logout />
      </Route>
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
