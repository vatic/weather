import React, { Component } from 'react';
import { connect } from 'react-redux'

import { citySearchInputChange } from '../../actions/ui'
import { getCurrentWeather } from '../../actions/weather'

export default class NavbarMain extends Component {

  render() {
    const { dispatch } = this.props
    const { currentCitySearchInputValue } = this.props.ui
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="col-md-3 navbar-header">
            <a className="navbar-brand" href="#">Weather</a>
          </div>
          <div className="col-md-9 navbar-header">
            <form className="navbar-form navbar-left city-search-form" role="search" onSubmit={ e => { e.preventDefault(); dispatch(getCurrentWeather('BY_CITY_NAME')) }}
            >
            <div className="form-group">
              <input type="text" className="form-control city-search-input" placeholder="Search"
                value={currentCitySearchInputValue}
                onChange={ e => dispatch(citySearchInputChange(e.target.value))}
              />
            </div>
            <button className="btn btn-default">
            
              Submit
            </button>
          </form>
          </div>
        </div>
      </nav>


    )
  }
}

function mapStateToProps(state) {
  const { ui } = state

  return {
    ui
  }
}

export default connect(mapStateToProps)(NavbarMain)

