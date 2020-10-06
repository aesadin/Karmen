import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import '../styles/main-content.css';


function Fund(props) {

  const user = firebase.auth().currentUser;
  const [showResults, setShowResults] = useState(false)

  const showVerify = () => {
    if(fundVerified) {
      setShowResults(true);
    }
  }
  


  return(
    <>
      <Card className="scroll-card">
        {/* <Card.Img variant='top'src={props.imgUrl} /> */}
          <Card.Body>
            <Card.Title>{props.fundTitle}</Card.Title>
            <Card.Subtitle><em>{props.city}</em></Card.Subtitle>
            <hr/>
            <Card.Text>
              <b>Description:</b> {props.description}
              <hr/>
              <a href={props.url}>Link to Fundraiser</a>
              <hr/>
              <p><button onClick={() => props.whenVerifyClicked(props.id)} class="btn btn-outline-primary btn-sm" >Verify</button></p>
              {/* {props.verified} */}
            </Card.Text>
          </Card.Body>
      </Card>
    </>
  );
}

Fund.propTypes = {
  fundTitle: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  // verified: PropTypes.string,
  whenVerifyClicked: PropTypes.func
}

export default Fund;