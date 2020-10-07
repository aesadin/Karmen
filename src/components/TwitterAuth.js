import React, { Component } from 'react';
import firebase from "firebase/app";
import TwitterIcon from "./TwitterIcon"
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import '../styles/twitterloginbutton.css';
import "firebase/auth";

class TwitterAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      currentUser: null,
      message: "",
    };


    if (!firebase.apps.length) {
      firebase.initializeApp(this.props.firebaseConfig);
    }
  }

  handleLogin() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  }
  render() {
    return (
      <div>
        <div onClick={this.handleLogin}>
          <TwitterIcon />
        </div>
      </div>
    );
  }
}

export default TwitterAuth;

{/* <div class="login-content-container-for-twitter">
        <a onClick={this.handleLogin}>
          <TwitterIcon />
        </a>
      </div> */}