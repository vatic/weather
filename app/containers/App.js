import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'


import NavbarMain from '../components/header/NavbarMain'
import CitySearch from '../components/search/CitySearch'
import CurrentWeather from '../components/weather/current/CurrentWeather'
import ForecastWeather from '../components/weather/forecast/ForecastWeather'
import CitiesList from '../components/cities/CitiesList'


class App extends Component {

  render() {

    return (

      <div id="wth_main">
        <NavbarMain />
        <div className="container-fluid">
          <div className="row weather-wrapper">
            <CitiesList {...this.props} />
            <CurrentWeather {...this.props} />
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { ui, cities } = state

  return {
    ui,
    cities
  }
}

export default connect(mapStateToProps)(App)

