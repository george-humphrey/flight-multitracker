DROP DATABASE IF EXISTS flight_tracker;

CREATE DATABASE flight_tracker;

USE flight_tracker;

CREATE TABLE flight_list (
  id INT NOT NULL AUTO_INCREMENT,
  flightName VARCHAR(30),
  flightCode VARCHAR(10) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);