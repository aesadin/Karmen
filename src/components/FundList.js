import React from "react";
import PropTypes from "prop-types";
import Fund from "./Fund";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import '../styles/index.css';
import '../styles/login.css';

function FundList(props){
  useFirestoreConnect([
    { collection: 'fundraisers' }
  ]);

  const fundraisers = useSelector(state => state.firestore.ordered.fundraisers);

  if(isLoaded(fundraisers)) {
    return (
      <React.Fragment>
          <div className="fund-grid-layout">
          {fundraisers.map((fund) => {
            return <div className='fund'>
              <Fund
            whenVerifyClicked = {props.onVerifyClick}
            fundTitle={fund.fundTitle}
            city={fund.city}
            description={fund.description}
            url={fund.url}
            verified={fund.verified}
            id={fund.id}
            key={fund.id}/>
            </div>
          })}
          </div>
          <div className='list'>
            <p><button onClick={props.onAddFundClick}>Add Fundraiser</button></p>
          </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading Fundraisers...</h3>
      </React.Fragment>
    )
  }
}

FundList.propTypes = {
  onFundSelection: PropTypes.func,
  onAddFundClick: PropTypes.func
};

export default FundList;