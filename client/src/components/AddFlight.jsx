import React from 'react';

const AddFlight = (props) => {
  if (props.full) {
    return (
      <div id='flightFormContainer'>
        <div id='formStatus'>{props.statusMessage}</div>
      </div>
    );
  } else {
    return (
      <div id='flightFormContainer'>
        <div id='addFlightForm'>
          <button type='submit' id='formSubmit' onClick={props.addFlight}>
            Add Flight
          </button>
          <input
            type='text'
            id='formFlightNumber'
            name='formFlightNumber'
            placeholder='Flight Number'></input>
        </div>
        <div id='formStatus'>{props.statusMessage}</div>
      </div>
    );
  }
};

export default AddFlight;
