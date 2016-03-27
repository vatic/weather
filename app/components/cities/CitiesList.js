import React, { Component } from 'react';
import classNames from 'classnames';


import { changeCurrentCityAndGetWeather, removeCity } from '../../actions/cities'


export default class CitiesList extends Component {


  render() {
    const { list, current } = this.props.cities;
    const { dispatch } = this.props

    const citiesBlock = list.map( city => {
      let activeCityClass = classNames(
        'list-group-item', 'city-item', {
        'disabled': city.id === current.id
      });
      return (
          <a href="#" key={city.id} className={activeCityClass} onClick={ e => { dispatch(changeCurrentCityAndGetWeather(city)) } } >{city.name}
            <span className="glyphicon glyphicon-remove pull-right remove-city" aria-hidden="true"
              onClick={ e => { e.stopPropagation(); dispatch(removeCity(city))} }>
            </span>
          </a>
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
