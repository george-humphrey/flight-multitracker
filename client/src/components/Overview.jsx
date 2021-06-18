import React from 'react';

const Overview = (props) => {
  return (
    <div className='overviewSection' id={`overviewSection${props.listNumber}`}>
      <div
        className='flightName'
        onClick={() => props.updateFlightName(props.listNumber)}>
        {props.flightName}
      </div>
      <div className='flightCode' id={`flightCode${props.listNumber}`}>
        {props.flightCode}
      </div>
      <div className='airlineLogo' id={`airlineLogo${props.listNumber}`}></div>
    </div>
  );
};

export default Overview;
