import React from 'react';

const AddFlight = (props) => {
  return (
    <div id='flightFormContainer'>
      <form id='addFlightForm' action={props.addFlight()}>
        <input type='submit' value='Add Flight'></input>
        <input
          type='text'
          id='formEntry'
          name='formEntry'
          placeholder='Flight Code'></input>
      </form>
      <div id='formStatus'></div>
    </div>
  );
};

export default AddFlight;
