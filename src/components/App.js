import React from 'react';
import PostControl from "./AppControl";
import Header from "./Header";
import Signin from "./Signin";
import SignOut from "./SignOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Header />
      <PostControl />
    </React.Fragment>
  );
}

export default App;