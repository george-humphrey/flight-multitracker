import $ from 'jquery';

function getFlights(callback = () => {}) {
  $.ajax({
    url: '/flights',
    type: 'GET',
    success: function (data) {
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
  let flightList = flights.map((flight) => {
    return { flightName: flight.flightName, flightCode: flight.flightCode };
  });

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
