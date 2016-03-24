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
          <td><strong>{item.main.temp > 0 ? `+${item.main.temp}` : item.main.temp} &deg;C</strong></td>
          <td><strong>{item.main.humidity} &#37;</strong></td>
          <td><strong>{Math.round(item.main.pressure * hpaToAtm) }</strong></td>
        </tr>
      )
    })
    return (
    <div className="col-md-4 daily-forecast-panel">
        <table className="table table-condensed">
          <thead><strong>{date}</strong></thead>
          <tbody>{forecastBlock}</tbody>
          
        </table>
    </div>
    )
  }
}
