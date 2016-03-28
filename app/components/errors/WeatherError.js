import React, { Component } from 'react';

export default class WeatherError extends Component {

  render() {

    return (
        <div className="col-md-12 current-location text-center">
          <h1><a href="openweathermap.com">openweathermap.com</a></h1>
          <h1>Error</h1>
        </div>
    )
  }
}
