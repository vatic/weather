import React, { Component } from 'react';
import classNames from 'classnames';

import CurrentWeather from './current/CurrentWeather'
import ForecastWeather from './forecast/ForecastWeather'

import { changeTab } from '../../actions/ui'

export default class CitySearch extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let activeTabClass = (tabName) => {
      return classNames({
      'active': this.props.ui.currentTab === tabName
      });
    }
    return (
      <div className="col-md-9 weather-wrapper">
        <ul className="nav nav-tabs">
          <li role="navigation" className={activeTabClass('CURRENT')}>
            <a href="#" onClick={ e => this.props.dispatch(changeTab('CURRENT'))}>
              Current
            </a>
          </li>
          <li role="navigation" className={activeTabClass('FORECAST')} >
            <a href="#" onClick={ e => this.props.dispatch(changeTab('FORECAST'))}>
              Forecast
            </a>
          </li>
            {this.props.ui.currentTab === 'CURRENT' &&
              <CurrentWeather />
            }
            {this.props.ui.currentTab === 'FORECAST' &&
              <ForecastWeather />
            }
        </ul>
      </div>
    )
  }
}
