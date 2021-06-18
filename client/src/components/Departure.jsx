import React from 'react';

const Departure = (props) => {
  return (
    <div
      className='departureSection'
      id={`departureSection${props.listNumber}`}>
      <div className='departureCity' id={`departureCity${props.listNumber}`}>
        <div
          className='cityCode departureCode'
          id={`departureCode${props.listNumber}`}>
          {props.airportCode}
        </div>
        <div
          className='cityName departureCityName'
          id={`departureCityName${props.listNumber}`}>
          {props.airportName}
        </div>
      </div>
      <div
        className='estimatedDeparture'
        id={`estimatedDeparture${props.listNumber}`}>
        {props.estimated}
      </div>
    </div>
  );
};

export default Departure;
