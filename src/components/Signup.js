import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout"
import '../styles/index.css';
import '../styles/login.css';

const Signup = ({history}) => {  // history is a key router term!

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      history.push('/')
    }).catch(function(error) {
      alert(error.message) 
    });
  }

  return (
    <Layout>
      <div className='login-content-container'>
        <div className='login-content'>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <br/>
            <br/>
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <br/>
            <br/>
            <button type="submit" class="btn btn-outline-danger">Sign up</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;