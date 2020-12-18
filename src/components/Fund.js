import React from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import TwitterIcon from "./TwitterIcon"
import FacebookIcon from "./FacebookIcon"
import { Grid, Row, Col } from 'react-bootstrap'
import '../styles/main-content.css';
import '../styles/twitterloginbutton.css';
import '../styles/SocialButtonList.css';

// THIS NEEDS TO BE A CLASS FUNCTION I THINK OR FUNCTION WITH HOOKS

class Fund extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      verified: "",
      userImage: null
    }

    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.twitterProvider = new firebase.auth.TwitterAuthProvider();
  };

  handleFbLogin = () => {
    
    firebase
      .auth()
      .signInWithPopup(this.facebookProvider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const currentUser = result.user;
        console.log(currentUser.providerData[0].providerId);
        // history.push('/fund')
      })
    
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // ...
      });

      let user = firebase.auth().currentUser;
      if (user.providerData[0].providerId === "facebook.com" || user.providerData[0].providerId === "twitter.com"){
        return this.setState({
          verified: 'Verrified By: ' + `${user.providerData[0].displayName}`,
          userImage: `${user.providerData[0].photoURL}`
        });
      } else {
        return this.setState({
          verified: "",
          userImage: null
        });
      }
  }
  


  render() {
    return (
      <div className='fund'>
        <Card className="scroll-card">
            <Card.Body>
              <Card.Title>{this.props.fundTitle}</Card.Title>
              <Card.Subtitle><em>{this.props.city}</em></Card.Subtitle>
            <hr/>
                <p><b>Description: </b> {this.props.description}</p>
                <hr/>
                <a href={this.props.url}>Link to Fundraiser</a>
              <hr/>
                <p><em>{this.props.alert}</em></p>
              <hr/>
              <h5>
                Verify This Fund
              </h5>
                <Row className="show-grid">
                  <Col md={3}>
                    <button onClick={this.handleFbLogin} className=" btn--facebook">
                      <TwitterIcon />
                    </button>
                  </Col>
                  <Col md={3}>
                    <button onClick={this.handleFbLogin} className=" btn--facebook">
                      <FacebookIcon />
                    </button>
                  </Col>
                </Row>
                <br/>
                <div>
                  <p>{this.state.verified}</p>
                </div>
                <div>
                  <img src={this.state.userImage} />
                </div>
            </Card.Body>
        </Card>
      </div>
    )
  }   
}



export default Fund;