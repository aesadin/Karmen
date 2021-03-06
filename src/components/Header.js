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
  let currentlyVisibleLink;
  if (auth.currentUser != null) {
    currentlyVisibleLink = <Link to="./Logout"><span className="btn-home">Sign out</span></Link>
  } else {
    currentlyVisibleLink = null
  }


  return (
    <React.Fragment>
      <div className="header-grid-layout">
        <Link to="/fund"><span className="btn-home">Home</span></Link>
        <div>{currentlyVisibleLink}</div>
        <p><button className="btn--facebook"><FacebookAuth /></button></p>
        <p><button className="btn--twitter"><TwitterAuth /></button></p>
      </div>
    </React.Fragment>
  );
}

export default Header;