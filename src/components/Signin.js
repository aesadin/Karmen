import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout"
import Container from 'react-bootstrap/Container';
import '../styles/index.css';
import '../styles/login.css';

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


  return (
    // <Layout>
      <div className='login-content-container'>
        <div className='login-content'>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <br/>
            <br/>
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <br/>
            <br/>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    // </Layout>
  );
}

export default withRouter(Signin);