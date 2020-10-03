import React, { useState } from "react";
import firebase from "firebase/app";
import Header from './Header';
import '../styles/index.css';
import '../styles/logout.css';

function Logout() {

  const [loggedIn, setLoggedIn] = useState(true)

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Signed out!");
      setLoggedIn(false);
    }).catch(function(error) {
      alert(error.message) ;
    });
  }

    return (
      <div className='logout-content-container'>
        <React.Fragment>
          <div className='logout-content'>
          {/* <Header />  */}
          <h1>Sign Out</h1>
          {loggedIn ? <button onClick={doSignOut}>Sign out</button> : <h4>You have successfully signed out!</h4>}
          </div>
        </React.Fragment>
      </div>
    )
}

export default Logout;