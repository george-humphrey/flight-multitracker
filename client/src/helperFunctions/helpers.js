import $ from 'jquery';

import api from './apiHelpers.js';
import db from './dbHelpers.js';
import API_Key from '../API_KEY.js';

function createNewFlight(flight) {
  let depTime =
    flight.departure.actual === null
      ? flight.departure.estimated
      : flight.departure.actual;
  let arrTime =
    flight.departure.actual === null
      ? flight.departure.estimated
      : flight.departure.actual;

  let newFlight = {
    flightName: 'New Flight',
    flightCode: flight.flight.iata,
    status: flight.flight_status,
    delay: flight.departure.delay,
    departure: {
      airportCode: flight.departure.iata,
      airportName: flight.departure.airport,
      time: new Date(depTime).toLocaleString('en-US', {
        timeZone: flight.departure.timezone,
      }),
    },
    arrival: {
      airportCode: flight.arrival.iata,
      airportName: flight.arrival.airport,
      time: new Date(arrTime).toLocaleString('en-US', {
        timeZone: flight.arrival.timezone,
      }),
    },
  };
  console.log(`UTC Departure: ${depTime}`);
  console.log(`Departure Time Zone: ${newFlight.departure.timezone}`);
  // is the problem that I'm not getting them in UTC?
  // try estimated: new Date(flight.departure.estimated).toLocaleString('en-US')
  // without timeZone

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

function checkUniqueCode(code) {
  let flights = this.state.flights;
  flights.forEach((flight) => {
    if (flight.flightCode === code) {
      return false;
    }
  });
  return true;
}

function addFlight() {
  let code = $('#formEntry').value;

  if (this.checkUniqueCode(code)) {
    $('#formStatus').html('Flight Already Listed');
  } else if (code === '') {
    $('#formStatus').html('Enter Flight Number');
  } else {
    api.findFlight(code, (err, flight) => {
      if (err) {
        console.log(err);
        $('#formStatus').html("ERROR: Couldn't Add Flight");
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
}

function deleteFlight(flightIndex) {
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
  flightList.forEach((flight) => {
    let flightCode = flight.flightCode;
    let flightName = flight.flightName;
    api.findFlight(flightCode, (err, flight) => {
      if (err) {
        $('#formStatus').html("ERROR: Can't Access Flight Information");
      }

      let newFlight = createNewFlight(flight);
      newFlight.flightName = flightName;

      let flights = this.state.flights;

      flights.push(newFlight);
      if (flights.length === flightList.length) {
        this.setState({ flights }, () => {
          db.saveFlights(flights, () => {
            flights.forEach((flight, index) => {
              let depCode = flight.departure.airportCode;
              let arrCode = flight.arrival.airportCode;

              setAirportColors(index, depCode, arrCode);
            });
          });
        });
      }
    });
  });
}

function loadFlights() {
  db.getFlights((err, flights) => {
    if (err) {
      console.log('error loading flights');
      console.log(err);
    } else {
      this.displayFlights(flights);
    }
  });
}

module.exports = {
  addFlight,
  deleteFlight,
  updateFlightName,
  setAirportColors,
  checkUniqueCode,
  loadFlights,
  displayFlights,
};
