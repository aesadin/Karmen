import React, { Component } from 'react';
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import '../styles/fbloginbutton.css';
import "firebase/auth";

class FacebookAuth extends Component {
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
    var provider = new firebase.auth.FacebookAuthProvider();
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
      <div class="login-content-container">
        <button onClick={this.handleLogin}>Sign in with Facebook </button>
      </div> 
    );
  }
}

export default FacebookAuth;