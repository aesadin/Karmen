import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout"
import '../styles/index.css';
import '../styles/login.css';

const Signin = ({history}) => {  // history is a key router term!

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      alert(error.message) 
    });
  }

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
    <Layout>
      <div className='login-content-container'>
        <div className='login-content'>
          <h1>Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <br/>
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <br/>
            <button type='submit'>Sign up</button>
          </form>
        </div>

        <div className='login-content'>
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
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
            <button type='submit'>Sign in</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Signin);