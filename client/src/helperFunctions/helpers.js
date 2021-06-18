import $ from 'jquery';

import api from './apiHelpers.js';
import db from './dbHelpers.js';
import API_Key from '../API_KEY.js';

function createNewFlight(flight) {
  let newFlight = {
    flightName: 'New Flight',
    flightCode: flight.flight.iata,
    status: flight.flight_status,
    delay: flight.departure.delay,
    departure: {
      airportCode: flight.departure.iata,
      airportName: flight.departure.airport,
      estimated: new Date(flight.departure.estimated).toLocaleString('en-US', {
        timeZone: flight.departure.timezone,
      }),
    },
    arrival: {
      airportCode: flight.arrival.iata,
      airportName: flight.arrival.airport,
      estimated: new Date(flight.arrival.estimated).toLocaleString('en-US', {
        timeZone: flight.arrival.timezone,
      }),
    },
  };

  return newFlight;
}

function findFlightColor(code) {
  let r = (code.charCodeAt(0) - 65) * 10;
  let g = (code.charCodeAt(1) - 65) * 10;
  let b = (code.charCodeAt(2) - 65) * 10;
  return [r, g, b];
}

function setAirportColors(index, depCode, arrCode) {
  let depColor = findFlightColor(depCode);
  let arrColor = findFlightColor(arrCode);

  let depBox = $(`#departureSection${index}`);
  let arrBox = $(`#arrivalSection${index}`);

  depBox.css(
    'background-color',
    `rgba(${depColor[0]}, ${depColor[1]}, ${depColor[2]}, 0.5)`
  );
  arrBox.css(
    'background-color',
    `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]}, 0.5)`
  );
}

function addFlight() {
  let code = prompt('Flight Code:');
  api.findFlight(code, (err, flight) => {
    if (err) {
      console.log(err);
    }

    let newFlight = createNewFlight(flight);
    let flights = this.state.flights;

    flights.push(newFlight);
    this.setState({ flights }, () => {
      db.saveFlights(flights);
      let index = this.state.flights.length - 1;
      let depCode = this.state.flights[index].departure.airportCode;
      let arrCode = this.state.flights[index].arrival.airportCode;

      setAirportColors(index, depCode, arrCode);
    });
  });
}

function deleteFlight(flightIndex) {
  console.log(`delete flight ${flightIndex}`);
  let flights = this.state.flights;
  flights.splice(flightIndex, 1);
  this.setState({ flights }, () => {
    db.saveFlights(flights);
    flights.forEach((flight, index) => {
      let depCode = this.state.flights[index].departure.airportCode;
      let arrCode = this.state.flights[index].arrival.airportCode;
      setAirportColors(index, depCode, arrCode);
    });
  });
}

function updateFlightName(flightIndex) {
  let newName = prompt('New Name:');
  let flights = this.state.flights;
  flights[flightIndex].flightName = newName;
  this.setState({ flights }, () => {
    db.saveFlights(flights);
  });
}

function displayFlights(flightList) {
  console.log('display FlightList');
  console.log(flightList);
  flightList.forEach((flight) => {
    let flightCode = flight.flightCode;
    let flightName = flight.flightName;
    api.findFlight(flightCode, (err, flight) => {
      if (err) {
        console.log(err);
      }

      let newFlight = createNewFlight(flight);
      console.log('flightName:');
      console.log(flightName);
      newFlight.flightName = flightName;
      console.log(newFlight);
      let flights = this.state.flights;

      flights.push(newFlight);
      this.setState({ flights }, () => {
        db.saveFlights(flights);
        let index = this.state.flights.length - 1;
        let depCode = this.state.flights[index].departure.airportCode;
        let arrCode = this.state.flights[index].arrival.airportCode;

        setAirportColors(index, depCode, arrCode);
      });
    });
  });
}

function loadFlights() {
  db.getFlights((err, flights) => {
    if (err) {
      console.log('error loading flights');
      console.log(err);
    } else {
      console.log(flights);
      this.displayFlights(flights);
    }
  });
}

module.exports = {
  addFlight,
  deleteFlight,
  updateFlightName,
  setAirportColors,
  loadFlights,
  displayFlights,
};
