import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ui_test } from '../actions/ui'

import NavbarMain from '../components/header/NavbarMain'
import CitySearch from '../components/search/CitySearch'
import CurrentWeather from '../components/weather/current/CurrentWeather'
import ForecastWeather from '../components/weather/forecast/ForecastWeather'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(ui_test())
  }

  render() {

    return (

      <div id="wth_main">
        <NavbarMain />
        <div className="container-fluid">
          <div className="row">
            <CitySearch />
          </div>
          <div className="row weather-wrapper">
            <CurrentWeather />
            <ForecastWeather />
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { ui } = state

  return {
    ui
  }
}

export default connect(mapStateToProps)(App)

