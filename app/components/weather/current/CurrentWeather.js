import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getCurrentWeather } from '../../../actions/weather'

class CurrentWeather extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getCurrentWeather())
  }

  render() {
    console.log('props', this.props)
    const hpaToAtm = 0.750062
    const { currentCity } = this.props.weather 
    const { humidity, pressure, temp } = this.props.weather.mainWeatherValues
    return (
        <div className="col-md-3 current-weather">
          <h1>{this.props.weather.currentCity}</h1>
          <ul className="list-group">
          	<li className="list-group-item">Temperature: {temp} &deg;C</li>
          	<li className="list-group-item">Humidity: {humidity} &#37;</li>
          	<li className="list-group-item">Pressure: { Math.round(pressure * hpaToAtm) } mm Hg</li>
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { weather } = state

  return {
    weather
  }
}

export default connect(mapStateToProps)(CurrentWeather)

