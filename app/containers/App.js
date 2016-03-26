import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import  { readLocalStorage, promptUserLocation } from '../actions/cities'
import NavbarMain from '../components/header/NavbarMain'
import CitySearch from '../components/search/CitySearch'
import WeatherWrapper from '../components/weather/WeatherWrapper'
import CitiesList from '../components/cities/CitiesList'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(readLocalStorage())
    this.props.dispatch(promptUserLocation())
  }

  render() {

    return (

      <div id="wth_main">
        <NavbarMain />
        <div className="container-fluid">
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
  const { ui, cities } = state

  return {
    ui,
    cities
  }
}

export default connect(mapStateToProps)(App)

