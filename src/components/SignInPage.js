import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Layout from "./Layout";
import FacebookButton from "./TwitterAuth";
import Signin from "./Signin";
import Signup from "./Signup";
import FacebookAuth from "./FacebookAuth";
import TwitterAuth from "./TwitterAuth";
import '../styles/SocialButtonList.css';
import '../styles/signinpage.css';

const SignInPage = () => (
  <Layout>
    <div class="signinpage-container">
      <h1>Sign In</h1>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button className="btn--facebook"><FacebookAuth /></button>
        <button className="btn--twitter"><TwitterAuth /></button>
        <div><Signin /></div>
      </div>
      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <FacebookAuth />
      <TwitterAuth /> */}
    </div>
  </Layout>
);


export default withRouter(SignInPage);

