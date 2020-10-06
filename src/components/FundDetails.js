import React from "react";
import PropTypes from "prop-types";
import '../styles/index.css';
import '../styles/details.css';

function FundDetails(props) {
  const { fund } = props;

  return (
    <React.Fragment>
    <div className='details-content-container'>
      <div className='details-content'>
        <h3>{fund.fundTitle}</h3>
        <p>This fundraiser is located in {fund.city}</p>
        <p>{fund.description}</p>
        <p><a href={fund.url}>Check It Out</a></p>
      </div>
    </div>
    </React.Fragment>
  )
}

FundDetails.propTypes = {
  fund: PropTypes.object
};

export default FundDetails;