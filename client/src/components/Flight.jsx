import React from 'react';

const Flight = (props) => {
  return (
    <div className='flight' id={`flight${props.listNumber}`}>
      <button
        className='delete'
        onClick={() => props.deleteFlight(props.listNumber)}>
        X
      </button>
      <div
        className='overviewSection'
        id={`overviewSection${props.listNumber}`}>
        <div
          className='flightName'
          onClick={() => props.updateFlightName(props.listNumber)}>
          {props.flight.flightName}
        </div>
        <div className='flightCode' id={`flightCode${props.listNumber}`}>
          {props.flight.flightCode}
        </div>
        <div
          className='airlineLogo'
          id={`airlineLogo${props.listNumber}`}></div>
      </div>
      <div className='statusSection' id={`statusSection${props.listNumber}`}>
        <div className='status' id={`status${props.listNumber}`}>
          {props.flight.status}
        </div>
      </div>
      <div
        className='departureSection'
        id={`departureSection${props.listNumber}`}>
        <div className='departureCity' id={`departureCity${props.listNumber}`}>
          <div
            className='cityCode departureCode'
            id={`departureCode${props.listNumber}`}>
            {props.flight.departure.airportCode}
          </div>
          <div
            className='cityName departureCityName'
            id={`departureCityName${props.listNumber}`}>
            {props.flight.departure.airportName}
          </div>
        </div>
        <div
          className='estimatedDeparture'
          id={`estimatedDeparture${props.listNumber}`}>
          {props.flight.departure.estimated}
        </div>
      </div>
      <div className='flightArrow'>{'->'}</div>
      <div className='arrivalSection' id={`arrivalSection${props.listNumber}`}>
        <div className='arrivalCity' id={`arrivalCity${props.listNumber}`}>
          <div
            className='cityCode arrivalCode'
            id={`arrivalCode${props.listNumber}`}>
            {props.flight.arrival.airportCode}
          </div>
          <div
            className='cityName arrivalCityName'
            id={`arrivalCityName${props.listNumber}`}>
            {props.flight.arrival.airportName}
          </div>
        </div>
        <div
          className='estimatedArrival'
          id={`estimatedArrival${props.listNumber}`}>
          {props.flight.arrival.estimated}
        </div>
      </div>
    </div>
  );
};

export default Flight;
