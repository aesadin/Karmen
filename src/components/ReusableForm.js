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
            placeholder='Fundraiser Title' />
            <br/>
            <input 
            type='text'
            name='city'
            placeholder='City' />
            <br/>
          <input 
            type='text'
            name='description'
            placeholder='Brief description' />
            <br/>
            <input 
            type='text'
            name='url'
            placeholder='https://example.com' />
            <br/>
            <br/>
            <p><span className="include">Include Important Instructions or Alerts Below</span></p>
            <br/>
            <br/>
            <input 
            type='text'
            name='alert'
            placeholder='Alerts or Instructions' />
            <br />
            <br />
          <button size="sm" class="btn btn-outline-secondary" type='submit'>{props.buttonText}</button>
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