import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout";
import FacebookButton from "./FacebookButton";
import Signin from "./Signin";
import Signup from "./Signup";
import FacebookAuth from "./FacebookAuth";

const SignInPage = () => (
  <Layout>
    <div>
      <h1>SignIn</h1>
      <Signin />
      <FacebookAuth />
      {/* <Signup /> */}
    </div>
  </Layout>
);


export default withRouter(SignInPage);

