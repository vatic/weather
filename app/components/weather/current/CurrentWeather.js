import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getCurrentWeather } from '../../../actions/weather'

class CurrentWeather extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getCurrentWeather())
  }

  render() {
    console.log('props', this.props)
    return (
        <div className="col-md-4 current-weather">
          <h1>Current: {this.props.weather.currentCity}</h1>
          <ul className="list-group">
          	<li className="list-group-item"></li>
          	<li className="list-group-item"></li>
          	<li className="list-group-item"></li>
          </ul>
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

export default connect(mapStateToProps)(CurrentWeather)

