// import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
// import PropTypes from "prop-types";
// import firebase from "firebase/app";
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
// import '../styles/main-content.css';


// const Fund = (props) => {

//   const [hidden, setHidden] = useState(true) // maybe use a verified, setVerified hook?
  
//   let currentlyVisible;
  

//   const doVerify = (event) => {
//     event.preventDefault();
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser.providerData[0].providerId == "facebook.com" || currentUser.providerData[0].providerId == "twitter.com" ) {
//       // setHidden(!hidden)
//       currentlyVisible = <p>{props.verified}</p>
      
//     } else {
//       currentlyVisible = null
//     }
//     console.log(currentlyVisible)
    
//   }
  

  
//     return(
//         <Card className="scroll-card">
//             <Card.Body>
//               <Card.Title>{props.fundTitle}</Card.Title>
//               <Card.Subtitle><em>{props.city}</em></Card.Subtitle>
//               <hr/>
//               <Card.Text>
//                 <b>Description:</b> {props.description}
//                 <hr/>
//                 <a href={props.url}>Link to Fundraiser</a>
//                 <hr/>
//                 <p><em>{props.alert}</em></p>
//                 <div>
//                   <p><button onClick={doVerify} type="submit" class="btn btn-outline-danger btn-sm">Verify</button></p>
//                   {/* {currentlyVisible} */}
//                   {hidden ? <p></p> : <p>{currentlyVisible}</p>}
//                 </div>
//               </Card.Text>
//             </Card.Body>
//         </Card>
//     );
// }

// Fund.propTypes = {
//   fundTitle: PropTypes.string,
//   city: PropTypes.string,
//   description: PropTypes.string,
//   url: PropTypes.string,
//   alert: PropTypes.string,
//   verified: PropTypes.string
  
// }

// export default Fund;

