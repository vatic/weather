import React, { Component } from 'react';

import { getCurrentWeather } from '../../../actions/weather'

export default class CurrentWeather extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getCurrentWeather())
  }

  render() {
    return (
        <div className="col-md-4 current-weather">
          <h1>Current</h1>
        </div>
    )
  }
}
