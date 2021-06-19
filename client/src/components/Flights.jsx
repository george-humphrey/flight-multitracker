import React from 'react';
import Flight from './Flight.jsx';
import AddFlight from './AddFlight.jsx';

const Flights = (props) => {
  let full = props.flights.length < 5 ? false : true;

  return (
    <div id='flights'>
      <div id='flightList'>
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
      <AddFlight
        addFlight={props.addFlight}
        statusMessage={props.statusMessage}
        full={full}
      />
    </div>
  );
};

export default Flights;
