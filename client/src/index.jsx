import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Flights from './components/Flights.jsx';
import helpers from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };

    this.addFlight = helpers.addFlight.bind(this);
    this.deleteFlight = helpers.deleteFlight.bind(this);
    this.updateFlightName = helpers.updateFlightName.bind(this);
    this.setAirportColors = helpers.setAirportColors.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div id='app'>
        <h1>The Gillianator</h1>
        <h3>A Flight Multi-Tracker</h3>
        <Flights
          flights={this.state.flights}
          addFlight={this.addFlight}
          deleteFlight={this.deleteFlight}
          updateFlightName={this.updateFlightName}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
