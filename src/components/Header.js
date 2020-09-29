import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

function Header() {

  const auth = firebase.auth();
  let currentlyVisibleLink = null;
  if (auth.currentUser != null) {
    currentlyVisibleLink = <Link to="/signOut"> Sign out</Link>
  } else {
    currentlyVisibleLink = <Link to="/signin"> Sign in</Link>
  }


// function Header() {

//   const [currentlyVisibleLink, setCurrentlyVisibleLink] = useState(<Link to="/signin"> Sign in</Link>);

//   const auth = firebase.auth();
//   if (auth.currentUser != null) {
//     setCurrentlyVisibleLink(currentlyVisibleLink == <Link to="/signOut"> Sign out</Link>)
//   } 


  return (
    <React.Fragment>
      <div className="header-grid-layout">
        <h1>The Flash</h1>
        <p><button><Link to="/">Home</Link></button></p>
        <p><button>{currentlyVisibleLink}</button></p>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

export default Header;