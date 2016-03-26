import React, { Component } from 'react';
import classNames from 'classnames';


import { changeCurrentCityAndGetWeather } from '../../actions/cities'


export default class CitiesList extends Component {


  render() {
    const { list, current } = this.props.cities;

    const citiesBlock = list.map( city => {
      let activeCityClass = classNames(
        'list-group-item', {
        'disabled': city.id === current.id
      });
      return (
          <a href="#" key={city.id} className={activeCityClass} onClick={ e => { this.props.dispatch(changeCurrentCityAndGetWeather(city)) } } >{city.name}</a>
      )
    })
    return (

      <div className="col-md-3 cities-list">
        <ul className="list-group">
          { citiesBlock }
        </ul>
      </div>
    )
  }
}
