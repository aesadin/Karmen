import React from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import '../styles/main-content.css';

// THIS NEEDS TO BE A CLASS FUNCTION I THINK OR FUNCTION WITH HOOKS

class Fund extends React.Component {

  constructor(props) {
    super(props);

  };

  verifyUser() {
    console.log("you did it")
  }

  // const [user, setUser] = useState({});
  // const user = firebase.auth().currentUser;
  // let currentlyVisible;
  
  // useEffect(() => {
  //   (async () => {
  //     const user = await firebase.auth().currentUser;
  //     console.log(user);
  //     // setUser(user);
  //     if (user.providerData[0].providerId == "facebook.com" || user.providerData[0].providerId == "twitter.com" ) {
  //       currentlyVisible = <p>&#11088</p>;
        
  //     } else {
  //       currentlyVisible = null
  //     }
  //     console.log(currentlyVisible)
  //   })();
  // }, []);

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
              
              <div>
                <p><button onClick={e => e.this.verifyUser} type="submit" className="btn btn-outline-danger btn-sm">Verify</button></p>
                {/* {currentlyVisible} */}
                {/* {hidden ? <p></p> : <p>{currentlyVisible}</p>} */}
              </div>
            </Card.Body>
        </Card>
      </div>
    )
  }   
}

// Fund.propTypes = {
//   fundTitle: PropTypes.string,
//   city: PropTypes.string,
//   description: PropTypes.string,
//   url: PropTypes.string,
//   alert: PropTypes.string,
//   verified: PropTypes.string
  
// }

export default Fund;