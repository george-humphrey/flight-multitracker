const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

let getFlights = function (callback) {
  let q = 'SELECT * FROM flight_list';

  connection.query(q, (err, results) => {
    if (err) {
      console.log('error getting from db');
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let saveFlights = function (data, callback) {
  let values = '';
  console.log(data.flightList);

  if (data.flightList) {
    data.flightList.forEach((flight) => {
      values += `("${flight.flightName}", "${flight.flightCode}"), `;
    });
    values = values.slice(0, values.length - 2);
  }

  let dropQ = 'TRUNCATE TABLE flight_list';
  let insertQ = `INSERT INTO flight_list (flightName, FlightCode) VALUES ${values}`;

  connection.query(dropQ, (err) => {
    if (err) {
      console.log('error posting to db');
      callback(err, null);
    } else {
      if (data.flightList) {
        connection.query(insertQ, (err) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null);
          }
        });
      }
    }
  });
};

module.exports = {
  getFlights,
  saveFlights,
};
