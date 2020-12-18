import React, { Component } from 'react';
import firebase from "firebase/app";
import TwitterIcon from "./TwitterIcon"
import '../styles/twitterloginbutton.css';
import "firebase/auth";

class TwitterAuth extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   token: "",
    //   currentUser: null,
    //   message: "",
    // };


    // if (!firebase.apps.length) {
    //   firebase.initializeApp(this.props.firebaseConfig);
    // }
  }

  handleTwitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(user.providerData[0].displayName)
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // ...
      });
      // history.push('/fund')
  }
  
  render() {
    return (
      <div>
        <div onClick={this.handleTwitterLogin}>
          <TwitterIcon />
        </div>
      </div>
    );
  }
};

export default TwitterAuth;

