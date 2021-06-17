import React from 'react';

const Flight = (props) => {
  return (
    <li className='flight' id={`flight${props.number}`}>
      <div className='overviewSection'>
        <div className='flightName'>George</div>
        <div className='flightCode'>DL0291</div>
        <div className='airlineLogo'>DL</div>
      </div>
      <div className='statusSection'>
        <div className='status'>On Time</div>
        <div className='statusMessage'></div>
      </div>
      <div className='departureSection'>
        <div className='departureCity'>
          <div className='cityCode'>LGA</div>
          <div className='cityName'>LaGuardia International</div>
        </div>
        <div className='estimatedDeparture'>10:33 AM</div>
      </div>
      <div className='arrivalSection'>
        <div className='arrivalCity'>
          <div className='cityCode'>MSP</div>
          <div className='cityName'>Minneapolis-St. Paul International</div>
        </div>
        <div className='estimatedArrival'>2:19 PM</div>
      </div>
    </li>
  );
};

export default Flight;
