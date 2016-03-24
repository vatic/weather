import React, { Component } from 'react';


export default class ForecastItem extends Component {

  render() {
    const hpaToAtm = 0.750062
    const { weatherData } = this.props
    const date = new Date(weatherData[0].dt_txt).toLocaleDateString()
    const forecastBlock = weatherData.map ( item => {
      return (
        <ul className="list-group">
          <li className="list-group-item">Time: {new Date(item.dt_txt).toLocaleTimeString()}</li>
          <li className="list-group-item">Temperature: {item.main.temp} &deg;C</li>
          <li className="list-group-item">Humidity: {item.main.humidity} &#37;</li>
          <li className="list-group-item">Pressure: { Math.round(item.main.pressure * hpaToAtm) } mm Hg</li>
        </ul>
      )
    })
    return (
    <div className="col-md-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{ date }</h3>
        </div>
        <div className="panel-body">
          {forecastBlock}
        </div>
      </div>
    </div>
    )
  }
}
