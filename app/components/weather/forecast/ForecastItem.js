import React, { Component } from 'react';


export default class ForecastItem extends Component {

  render() {
    const hpaToAtm = 0.750062
    const { weatherData } = this.props
    const date = new Date(weatherData[0].dt_txt).toLocaleDateString()
    const forecastBlock = weatherData.map ( (item, index) => {
      return (
        <tr key={`forecast_item_${index}`}>
          <td>{new Date(item.dt_txt).toLocaleTimeString()}</td>
          <td><strong>{item.main.temp} &deg;C</strong></td>
        </tr>
      )
    })
    return (
    <div className="col-md-4">
      <div className="panel panel-default daily-forecast-panel">
        <div className="panel-heading">
          <h3 className="panel-title">{ date }</h3>
        </div>
        <div className="panel-body">
        <table className="table table-bordered table-condensed">
          {forecastBlock}
        </table>
        </div>
      </div>
    </div>
    )
  }
}
