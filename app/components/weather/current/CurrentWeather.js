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
        <span key={'temp1'}>Temperature: <strong key>{temp} {String.fromCharCode(0x00B0)}C</strong></span>,
          <span key={'desc1'}>'Description: ', <strong>{weatherDesc.description}</strong></span>,
      ],
      [
        <span key={'hum1'}>'Humidity: ', <strong>{humidity} %</strong></span>,
          <span key={'deg1'}>Wind degree: ', <strong>{Math.round(wind.deg)} {String.fromCharCode(0x00B0)}</strong></span>
      ],
      [
        <span key={'pres1'}>Pressure: ', <strong>{ Math.round(pressure * hpaToAtm) } mm Hg</strong></span>,
        <span key={'speed1'}>Wind speed: ', <strong>{wind.speed} m/sec</strong></span>
      ]
    ];
    const tBody = tableRows.map( (row, index) => {
      return (
        <tr key={index}>
          <td key="current_0">{row[0]}</td>
          <td key="current_1">{ row [1]}</td>
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



