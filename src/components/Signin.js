import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Layout from "./Layout"
import Container from 'react-bootstrap/Container';
import '../styles/SocialButtonList.css';
// import '../styles/index.css';
// import '../styles/login.css';

const Signin = ({history}) => {  // history is a key router term!

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      history.push('/')
    }).catch(function(error) {
      alert(error.message) 
    });
  }

    function hideForm() {
      // add functionality to toggle being able to see form when icon clicked
    }


  return (
    <React.Fragment>
      <div>
        <form onSubmit={doSignIn}>
          <div onClick={hideForm} className="btn--email">
            <MDBIcon icon="envelope" className="pr-1"/>
          </div>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
          <br/>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' /> 
            <br/>
          <button type="submit" size="sm">submit</button> 
        </form>
      </div> 
    </React.Fragment>
  );
}

export default Signin;