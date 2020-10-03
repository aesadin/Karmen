import React from "react";
import PropTypes from "prop-types";
import '../styles/index.css';
import '../styles/forms.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className='form-styles'>
        <form onSubmit={props.formSubmissionHandler}>
          <input 
            type='text'
            name='fundTitle'
            placeholder='Fund Title' />
            <br/>
          <input 
            type='text'
            name='description'
            placeholder='Brief description' />
            <br/>
            <input 
            type='url'
            name='link'
            placeholder='https://example.com' />
            <br/>
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;