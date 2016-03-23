import React, { Component } from 'react';

export default class CurrentWeather extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="col-md-4 current-weather">
          <h1>Current</h1>
        </div>
    )
  }
}
