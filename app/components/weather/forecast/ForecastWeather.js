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
    const { forecast, reducedForecast } = this.props.weather
    window.reducedForecast = reducedForecast

    const dayForecastBlock = reducedForecast && reducedForecast.map( (item, index) => {
      return (
        <div key={`forecast_daily_item_${index}`}>
          <ForecastItem weatherData={item} />
        </div>
      )
    })
    return (
        <div className="col-md-9 forecast-weather">
          { dayForecastBlock }
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

