import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
// import Header from './Header';
import { useFirestore } from 'react-redux-firebase';

function EditFlashcardForm (props) {

  const firestore = useFirestore(); //this is importing a method, so the variable calls that method

  const { fund } = props;
  console.log(fund);
  function handleEditFundFormSubmission(event) {
    event.preventDefault();
    props.onEditFund();
    const propertiesToUpdate = {
      fundTitle: event.target.fundTitle.value,
      description: event.target.description.value,
      url: event.target.url.value
    }
    return firestore.update({collection: 'fundraisers', doc: fund.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      <ReusableForm
        formSubmissionHandler = {handleEditFundFormSubmission}
        buttonText = "Update Fundraiser" />
    </React.Fragment>
  );
}

EditFlashcardForm.propTypes = {
  onEditFund: PropTypes.func
}

export default EditFlashcardForm;