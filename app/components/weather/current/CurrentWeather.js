import React, { Component } from 'react';
import { connect } from 'react-redux'

import WeatherError from '../../errors/WeatherError'

import { getCurrentWeather } from '../../../actions/weather'
import { changeCurrentCityAndGetWeather } from '../../../actions/cities'


export default class CurrentWeather extends Component {

  render() {
    const hpaToAtm = 0.750062
    const { currentCity, isFetchingCurrent, isServerError } = this.props.weather 
    const { humidity, pressure, temp } = this.props.weather.mainWeatherValues
    const { wind, weatherDesc } = this.props.weather
    const tableRows = [
      [
        ['Temperature:', <strong>{temp} {String.fromCharCode(0x00B0)}C</strong>],
        ['Description: ', <strong>{weatherDesc.description}</strong>],
      ],
      [
        ['Humidity: ', <strong>{humidity} %</strong>],
        ['Wind degree :', <strong>{Math.round(wind.deg)} {String.fromCharCode(0x00B0)}</strong>]
      ],
      [
        ['Pressure: ', <strong>{ Math.round(pressure * hpaToAtm) } mm Hg</strong>],
        ['Wind speed: ', <strong>{wind.speed} m/sec</strong>]
      ]
    ];
    const tBody = tableRows.map( (row, index) => {
      return (
        <tr key={index}>
          <td>{row[0]}</td>
          <td>{ row [1]}</td>
        </tr>
      )
    })

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
            <div className="panel-heading">
              <strong>{this.props.weather.currentCity}</strong>
            </div>
            <table className="table">
              <tbody>
                { tBody}
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }
}



