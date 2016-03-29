import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import  { readLocalStorage, promptUserLocation } from '../actions/cities'
import NavbarMain from '../components/header/NavbarMain'
import WeatherWrapper from '../components/weather/WeatherWrapper'
import CitiesList from '../components/cities/CitiesList'
import CurrentLocation from '../components/location/CurrentLocation'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(readLocalStorage())
    this.props.dispatch(promptUserLocation())
  }

  render() {

    return (

      <div id="wth_main">
        <NavbarMain {...this.props} />
        <div className="container-fluid">
          <div className="row current-location-wrapper">
            <CurrentLocation {...this.props} />
          </div>
          <div className="row weather-wrapper">
            <CitiesList {...this.props} />
            <WeatherWrapper {...this.props} />
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { ui, cities, weather} = state

  return {
    ui,
    cities,
    weather
  }
}

export default connect(mapStateToProps)(App)

