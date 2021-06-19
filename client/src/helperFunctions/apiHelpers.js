import $ from 'jquery';

const API_KEY = require('../API_KEY.js');

function findFlight(flight_iata, callback) {
  $.ajax({
    // free tier for api does not allow https
    url: `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`,
    type: 'get',
    data: {
      flight_iata,
    },
    success: function (data) {
      callback(null, data.data[0]);
    },
    error: function (err) {
      console.log('error!');
      console.log(err);
      callback(err);
    },
  });
}

module.exports = { findFlight };
