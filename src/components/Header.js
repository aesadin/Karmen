import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import FacebookAuth from "./FacebookAuth";
import TwitterAuth from "./TwitterAuth";
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import '../styles/SocialButtonList.css';
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
        <p><Link to="/">Home</Link></p>
        <p><button className="btn--facebook"><FacebookAuth /></button></p>
        <p><button className="btn--twitter"><TwitterAuth /></button></p>
        <p>{currentlyVisibleLink}</p>
      </div>
    </React.Fragment>
  );
}

export default Header;