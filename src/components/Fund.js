import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import '../styles/main-content.css';


function Fund(props) {
// show function doesnt work
  const [hidden, setHidden] = useState(true)
  const currentUser = firebase.auth().currentUser;
  let currentlyVisible = null;
  

  // function doVerify() {
    if (currentUser.providerData[0].providerId == "facebook.com" || currentUser.providerData[0].providerId == "twitter.com" ) {
      // setHidden(!hidden)
      currentlyVisible = <p>&#11088;</p>
      console.log(currentlyVisible)
    } else {
      currentlyVisible = null
    }
  // }
  


  return(
      <Card className="scroll-card">
          <Card.Body>
            <Card.Title>{props.fundTitle}</Card.Title>
            <Card.Subtitle><em>{props.city}</em></Card.Subtitle>
            <hr/>
            <Card.Text>
              <b>Description:</b> {props.description}
              <hr/>
              <a href={props.url}>Link to Fundraiser</a>
              <hr/>
              <div>
                <p><button onClick={() => Fund(props.id) }type="submit" class="btn btn-outline-primary btn-sm">Verify</button></p>
                {currentlyVisible}
                {/* {hidden ? <p></p> : <p>{currentlyVisible}</p>} */}
              </div>
            </Card.Text>
          </Card.Body>
      </Card>
  );

}

Fund.propTypes = {
  fundTitle: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  // verified: PropTypes.string,
  // whenVerifyClicked: PropTypes.func
}

export default Fund;