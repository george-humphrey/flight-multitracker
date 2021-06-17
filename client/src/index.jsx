import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Flights from './components/Flights.jsx';
import helpers from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [
        {
          flightName: 'George',
          flightCode: 'DL2350',
          status: 'On Time',
          departure: {
            airportCode: 'LGA',
            airportName: 'Laguardia International Airport',
            estimated: '12:23 PM',
          },
          arrival: {
            airportCode: 'MSP',
            airportName: 'Minneapolis-St. Paul International Airport',
            estimated: '4:13 PM',
          },
        },
      ],
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
        <Flights flights={this.state.flights} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
