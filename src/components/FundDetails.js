import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
// import Header from './Header';
import '../styles/index.css';
import '../styles/details.css';

function FundDetails(props) {
  const { fund } = props;

  return (
    <React.Fragment>
    <div>
      <div>
        <h3>{fund.fundTitle}</h3>
        <p>{fund.description}</p>
        <p><a href={fund.url}>Check It Out</a></p>
      </div>
    </div>
    </React.Fragment>
  )
}

FlashcardDetails.propTypes = {
  fund: PropTypes.object
};

export default FundDetails;