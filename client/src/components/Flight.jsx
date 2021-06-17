import React from 'react';

const Flight = (props) => {
  return (
    <div className='flight' id={`flight${props.number}`}>
      <button className='delete'>X</button>
      <div className='overviewSection'>
        <div className='flightName'>{props.flight.flightName}</div>
        <div className='flightCode'>{props.flight.flightCode}</div>
        <div className='airlineLogo'></div>
      </div>
      <div className='statusSection'>
        <div className='status'>{props.flight.status}</div>
      </div>
      <div className='departureSection'>
        <div className='departureCity'>
          <div className='cityCode departureCode'>
            {props.flight.departure.airportCode}
          </div>
          <div className='cityName departureCity'>
            {props.flight.departure.airportName}
          </div>
        </div>
        <div className='estimatedDeparture'>
          {props.flight.departure.estimated}
        </div>
      </div>
      <div className='flightArrow'>{'->'}</div>
      <div className='arrivalSection'>
        <div className='arrivalCity'>
          <div className='cityCode arrivalCode'>
            {props.flight.arrival.airportCode}
          </div>
          <div className='cityName arrivalCity'>
            {props.flight.departure.airportName}
          </div>
        </div>
        <div className='estimatedArrival'>{props.flight.arrival.estimated}</div>
      </div>
    </div>
  );
};

export default Flight;
