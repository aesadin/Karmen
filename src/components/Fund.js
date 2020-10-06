import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import '../styles/main-content.css';


function Fund(props) {

  const user = firebase.auth().currentUser;
  const [disabled, setDisabled] = useState(true);

  function isDisabled () {
    if (user.providerData[0].providerId === "twitter.com") {
        setDisabled(false);
    } else {
      setDisabled(disabled);
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
              <p><button onClick={props.onVerifyClick} class="btn btn-outline-primary btn-sm" disabled={isDisabled()}>Verify</button></p>
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
  onVerifyClick: PropTypes.func
}

export default Fund;