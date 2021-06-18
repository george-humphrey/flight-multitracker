import $ from 'jquery';

function getFlights(callback = () => {}) {
  $.ajax({
    url: '/flights',
    type: 'GET',
    success: function (data) {
      console.log('got data:');
      console.log(data);
      callback(null, data);
    },
    error: function (err) {
      console.log('error getting flights');
      console.log(err);
      callback(err);
    },
  });
}

function saveFlights(flights, callback = () => {}) {
  console.log('flights: ');
  console.log(flights);
  let flightList = flights.map((flight) => {
    console.log('mapping');
    console.log(flight);
    return { flightName: flight.flightName, flightCode: flight.flightCode };
  });
  console.log(flightList);

  $.ajax({
    url: '/flights',
    type: 'POST',
    data: {
      flightList,
    },
    success: function () {
      callback(null);
    },
    error: function (err) {
      console.log('error saving flights');
      console.log(err);
    },
  });
}

module.exports = { getFlights, saveFlights };
