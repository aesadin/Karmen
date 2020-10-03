import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import '../styles/header.css';
import '../styles/index.css';

function Header() {

  const auth = firebase.auth();
  let currentlyVisibleLink = null;
  if (auth.currentUser != null) {
    currentlyVisibleLink = <Link to="/logout"> Sign out</Link>
  } else {
    currentlyVisibleLink = <Link to="/signin"> Sign in</Link>
  }


  return (
    <React.Fragment>
      <div className="header-grid-layout">
        <p><button><Link to="/">Home</Link></button></p>
        <p><button>{currentlyVisibleLink}</button></p>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

export default Header;