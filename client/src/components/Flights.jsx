import React from 'react';
import Flight from './Flight.jsx';

const Flights = (props) => {
  return (
    <div id='flights'>
      <ul id='flightsList'>
        <Flight number={1} />
      </ul>
    </div>
  );
};

export default Flights;
