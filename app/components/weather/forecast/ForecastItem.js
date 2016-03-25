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
          <td><strong>{item.main.temp > 0 ? `+${item.main.temp}` : item.main.temp}</strong></td>
          <td><strong>{item.main.humidity}</strong></td>
          <td className="text-center"><strong>{Math.round(item.main.pressure * hpaToAtm) }</strong></td>
        </tr>
      )
    })
    return (
    <div className="col-md-4 col-sm-6 daily-forecast-panel">
      <div className="thumbnail">
        <div className="caption text-center"><strong>{date}</strong></div>
        <table className="table table-condensed ">
          <thead>
            <tr>
              <td>Time</td>
              <td> &deg;C</td>
              <td>&#37;</td>
              <td>mm Hg</td>
            </tr>
          </thead>
          <tbody>{forecastBlock}</tbody>
        </table>
      </div>
    </div>
    )
  }
}
