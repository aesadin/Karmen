import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function AddFundForm (props) {

  const firestore = useFirestore();

  function addFundToFirestore(event) {
    event.preventDefault();
    props.onFundCreation();
    return firestore.collection('fundraisers').add(
      {
        fundTitle: event.target.fundTitle.value,
        city: event.target.city.value,
        description: event.target.description.value,
        url: event.target.url.value,
        // verified: "&#11088;"
      }
    );
  }
  return (
    <React.Fragment>
      <div className='form-styles-container'>
        <ReusableForm
          formSubmissionHandler = {addFundToFirestore}
          buttonText = "Add Fundraiser" />
      </div>
    </React.Fragment>
  );
}

AddFundForm.propTypes = {
  onFundCreation: PropTypes.func
}

export default AddFundForm;