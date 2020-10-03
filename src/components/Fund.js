import React, { useState } from "react";
import PropTypes from "prop-types";

function Fund(props) {

  const [hidden, sethidden] = useState(true);

  return (
    <React.Fragment>
      <div>
        <div onClick = {() => sethidden(!hidden)}>
        <h3>{props.fundTitle}</h3>
        <p><a href={props.url}>Link to Fundraiser</a></p>
          {hidden ? <h4></h4> : <h4>{props.description}</h4>}
        </div>
        <p><button onClick = {() => props.whenDetailsClicked(props.id)}></button></p>
      </div>
    </React.Fragment>
  )
}

Fund.propTypes = {
  fundTitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  whenDetailsClicked: PropTypes.func
}

export default Fund;