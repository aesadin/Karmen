import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

// function Fund(props) {

//   const [hidden, setHidden] = useState(true);

//   return (
//     <React.Fragment>
//       <div>
//         <div onClick = {() => setHidden(!hidden)}>
//           <h3>{props.fundTitle}</h3>
//           {hidden ? <h4></h4> : <h4>{props.description}</h4>}
//         <a href={props.url}>Link to Fundraiser</a>
//         </div>
//         <p><button onClick = {() => props.whenDetailsClicked(props.id)}>Details</button></p>
//       </div>
//     </React.Fragment>
//   );
// }

function Fund(props) {
  return(
    <>
      <Card>
        {/* <Card.Img variant='top'src={props.imgUrl} /> */}
        <Card.Body>
          <Card.Title>{props.fundTitle}</Card.Title>
          <Card.Subtitle>{props.city}</Card.Subtitle>
          <Card.Text>
            Description: {props.description}
            <hr/>
            URL: <a href={props.url}>Link to Fundraiser</a>
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
  whenDetailsClicked: PropTypes.func
}

export default Fund;