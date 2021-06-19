import React from 'react';

const AddFlight = (props) => {
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
      <div id='formStatus'></div>
    </div>
  );
};

export default AddFlight;
