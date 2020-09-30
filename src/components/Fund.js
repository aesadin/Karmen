import React, { useState } from "react";
import PropTypes from "prop-types";

function Fund(props) {

  const [hidden, sethidden] = useState(true);

  return (
    <React.Fragment>
      <div>
        <div onClick = {() => sethidden(!hidden)}>
          {hidden ? <h4></h4> : <h4>This will be fundraiser information soon! will this call a document? I guess so...</h4>}
        </div>
        <p><button onClick = {() => props.whenDetailsClicked(props.id)}></button></p>
      </div>
    </React.Fragment>
  )
}