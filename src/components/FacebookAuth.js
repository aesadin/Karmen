import React, { Component } from 'react';
import firebase from "firebase/app";
import FacebookIcon from "./FacebookIcon"
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../styles/fbloginbutton.css';
import '../styles/SocialButtonList.css';
import "firebase/auth";

class FacebookAuth extends Component {
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


  handleFbLogin() {
    // let history = useHistory();
    const provider = new firebase.auth.FacebookAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const currentUser = result.user;
        console.log(currentUser.providerData[0].providerId);
        // history.push('/fund')
      })
    
      .catch(function(error) {
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
        <div onClick={this.handleFbLogin} >
          <FacebookIcon />
        </div>
      </div> 
    );
  }
}

export default withRouter(FacebookAuth);

