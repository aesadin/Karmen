import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout"
import '../styles/SocialButtonList.css';
import '../styles/login.css';

const Signin = ({history}) => {  

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      history.push('/fund')
    }).catch(function(error) {
      alert(error.message) 
    });
  }



  return (
    <React.Fragment>
      <Layout>
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
              placeholder='password' />
              <br/>
              <br/>
            <button type="submit" size="sm" className="btn btn-outline-secondary btn-sm">
              <span className="spinner-border spinner-border-sm"></span>
              Log In
            </button>
          </form>
        </div>
      </div>
      </Layout>
    </React.Fragment>
  );
}

export default withRouter(Signin);

