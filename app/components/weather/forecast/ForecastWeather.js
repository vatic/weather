import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getForecastWeather } from '../../../actions/weather'

import ForecastItem from './ForecastItem'

class ForecastWeather extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getForecastWeather())
  }

  render() {
    const { forecast } = this.props.weather
    const forecastBlock = forecast.map( (item, index) => {
      return (
        <div class="col-md-2" key={`forecast_item_${index}`}>
          <ForecastItem weatherData={item} />
        </div>
      )
    })
    return (
        <div className="col-md-8 forecast-weather">
          <h1>Forecast</h1>
          { forecastBlock }
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

export default connect(mapStateToProps)(ForecastWeather)

