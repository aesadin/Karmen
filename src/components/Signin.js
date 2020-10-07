import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Layout from "./Layout"
import Container from 'react-bootstrap/Container';
import '../styles/SocialButtonList.css';
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
      <div>
        <div className="btn--twitter">
          <form onSubmit={doSignIn}>
            <label>
              <a type="submit"><MDBIcon icon="envelope" className="pr-1" />Sign in</a>
              <select>
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
              </select>
            </label>
          </form>
        </div>
      </div>
    // </Layout>
  );
}

export default withRouter(Signin);