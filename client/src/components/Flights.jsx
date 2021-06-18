import React from 'react';
import Flight from './Flight.jsx';
import AddFlight from './AddFlight.jsx';

const Flights = (props) => {
  if (props.flights.length < 5) {
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
        <AddFlight addFlight={props.addFlight} />
      </div>
    );
  } else {
    return (
      <div id='flights'>
        <div id='flightList'>
          {props.flights.map((flight, index) => {
            return <Flight listNumber={index} flight={flight} key={index} />;
          })}
        </div>
      </div>
    );
  }
};

export default Flights;
