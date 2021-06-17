import React from 'react';
import Flight from './Flight.jsx';

const Flights = (props) => {
  if (props.flights.length < 5) {
    return (
      <div id='flights'>
        <div id='flightsList'>
          {props.flights.map((flight, index) => {
            return (
              <Flight
                listNumber={index}
                flight={flight}
                updateFlightName={props.updateFlightName}
                deleteFlight={props.deleteFlight}
                key={index}
              />
            );
          })}
        </div>
        <button id='addFlight' onClick={props.addFlight}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <div id='flights'>
        <div id='flightsList'>
          {props.flights.map((flight, index) => {
            return <Flight listNumber={index} flight={flight} key={index} />;
          })}
        </div>
      </div>
    );
  }
};

export default Flights;
