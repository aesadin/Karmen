import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import FacebookButton from "./TwitterAuth";
import Signin from "./Signin";
import Signup from "./Signup";
import FacebookAuth from "./FacebookAuth";
import TwitterAuth from "./TwitterAuth";
import '../styles/signinpage.css';

const SignInPage = () => (
  <Layout>
    <div class="signinpage-container">
      <h1>Sign In</h1>
      <div class="signup-button">
        <button><Link to="/Signup">Sign Up</Link></button>
      </div>
      <div class="signin-button">
        <button><Link to="/signin">Sign In with Email</Link></button>
      </div>
      <FacebookAuth />
      <TwitterAuth />
    </div>
  </Layout>
);


export default withRouter(SignInPage);

