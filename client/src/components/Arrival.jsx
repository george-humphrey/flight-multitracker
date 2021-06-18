import React from 'react';

const Arrival = (props) => {
  return (
    <div className='arrivalSection' id={`arrivalSection${props.listNumber}`}>
      <div className='arrivalCity' id={`arrivalCity${props.listNumber}`}>
        <div
          className='cityCode arrivalCode'
          id={`arrivalCode${props.listNumber}`}>
          {props.airportCode}
        </div>
        <div
          className='cityName arrivalCityName'
          id={`arrivalCityName${props.listNumber}`}>
          {props.airportName}
        </div>
      </div>
      <div
        className='estimatedArrival'
        id={`estimatedArrival${props.listNumber}`}>
        {props.estimated}
      </div>
    </div>
  );
};

export default Arrival;
