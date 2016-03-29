import React, { Component } from 'react';
import { connect } from 'react-redux'

import WeatherError from '../../errors/WeatherError'

import { getCurrentWeather } from '../../../actions/weather'
import { changeCurrentCityAndGetWeather } from '../../../actions/cities'


class CurrentWeather extends Component {

  render() {
    const hpaToAtm = 0.750062
    const { currentCity, isFetchingCurrent, isServerError } = this.props.weather 
    const { humidity, pressure, temp } = this.props.weather.mainWeatherValues
    return (
      <div>
        { isFetchingCurrent &&
          <div className="weather-loader">
            <i className="fa fa-spinner fa-spin fa-5x"></i>
          </div>
        }
        { !isFetchingCurrent && isServerError &&
          <WeatherError />
        }
        { !isFetchingCurrent && !isServerError &&
          <div className="current-weather">
            <h1><small>{this.props.weather.currentCity}</small></h1>
            <ul className="list-group">
              <li className="list-group-item">Temperature: {temp} &deg;C</li>
              <li className="list-group-item">Humidity: {humidity} &#37;</li>
              <li className="list-group-item">Pressure: { Math.round(pressure * hpaToAtm) } mm Hg</li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { weather, cities } = state

  return {
    weather,
    cities
  }
}

export default connect(mapStateToProps)(CurrentWeather)

