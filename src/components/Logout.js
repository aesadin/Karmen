import React, { useState } from "react";
import firebase from "firebase/app";
import FacebookAuth from "./FacebookAuth";
import Layout from "./Layout"
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
      <Layout>
        <div className='logout-content-container'>
          <div className='logout-content'>
          <h1>Sign Out</h1>
          {loggedIn ? <button onClick={doSignOut} type="submit">Sign out</button> : <h4>You have successfully signed out!</h4>}
          </div>
        </div>
      </Layout>
    )
}

export default Logout;