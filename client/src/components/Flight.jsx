import React from 'react';

import Delete from './Delete.jsx';
import Overview from './Overview.jsx';
import Status from './Status.jsx';
import Arrival from './Arrival.jsx';
import Departure from './Departure.jsx';

const Flight = (props) => {
  return (
    <div className='flight' id={`flight${props.listNumber}`}>
      <Delete listNumber={props.listNumber} deleteFlight={props.deleteFlight} />
      <Overview
        listNumber={props.listNumber}
        updateFlightName={props.updateFlightName}
        flightName={props.flight.flightName}
        flightCode={props.flight.flightCode}
      />
      <Status listNumber={props.listNumber} status={props.flight.status} />
      <Departure
        listNumber={props.listNumber}
        time={props.flight.departure.time}
        airportName={props.flight.departure.airportName}
        airportCode={props.flight.departure.airportCode}
      />
      <div className='flightArrow'>{'->'}</div>
      <Arrival
        listNumber={props.listNumber}
        time={props.flight.arrival.time}
        airportName={props.flight.arrival.airportName}
        airportCode={props.flight.arrival.airportCode}
      />
    </div>
  );
};

export default Flight;
