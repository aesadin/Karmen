import React, { Component } from 'react';
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import FacebookIcon from "./FacebookIcon"
import { useHistory } from "react-router-dom";
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


  handleLogin({history}) {
    const provider = new firebase.auth.FacebookAuthProvider();
    const userBirthday = provider.addScope('user_birthday');
    // provider.addScope('user_photoURL');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const currentUser = result.user;
        console.log(currentUser.providerData[0].providerId);
        console.log(provider);
        history.push('/')
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
        <button onClick={this.handleLogin} size="lg">
        <FacebookIcon /><span>Sign in with Facebook</span>
        </button>
      </div> 
    );
  }
}

export default FacebookAuth;

