import React, { Component } from 'react';


export default class ForecastItem extends Component {

  render() {
    const hpaToAtm = 0.750062
    return (
    <div className="col-md-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{ this.props.weatherData.dt_txt }</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">Temperature: {this.props.weatherData.main.temp} &deg;C</li>
            <li className="list-group-item">Humidity: {this.props.weatherData.main.humidity} &#37;</li>
            <li className="list-group-item">Pressure: { Math.round(this.props.weatherData.main.pressure * hpaToAtm) } mm Hg</li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
