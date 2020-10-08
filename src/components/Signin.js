import React from "react";
import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import '../styles/SocialButtonList.css';
// import '../styles/index.css';
// import '../styles/login.css';

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
      <div className='login-content-container'>
        <div className='email-login-content'>
        <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='password' />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Signin);

