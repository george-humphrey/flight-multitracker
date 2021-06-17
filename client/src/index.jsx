import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Flights from './components/Flights.jsx';
import helpers from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight1: {
        flightName: 'George',
        flightCode: 'DL2350',
        status: 'On Time',
        departure: {
          airportCode: 'LGA',
          airportName: 'Laguardia International Airport',
          scheduled: '12:23 PM',
          estimated: '12:23 PM',
          actual: '12:23 PM',
        },
        arrival: {
          airportCode: 'MSP',
          airportName: 'Minneapolis-St. Paul International Airport',
          scheduled: '4:19 PM',
          estimated: '4:13 PM',
          actual: null,
        },
      },
      flight2: {},
      flight1: {},
      flight2: {},
      flight5: {},
    };

    this.addFlight = helpers.addFlight.bind(this);
    this.removeFlight = helpers.removeFlight.bind(this);
    this.updateFlightName = helpers.updateFlightName.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div id='app'>
        <h1>The Gillianator</h1>
        <h3>A Flight Multi-Tracker</h3>
        <Flights />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
