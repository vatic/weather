import React, { Component } from 'react';

import { changeCurrentCityAndGetWeather } from '../../actions/cities'


export default class CitiesList extends Component {

  render() {
    const { list } = this.props.cities;

    const citiesBlock = list.map( city => {
      return (
        <div className="list-group-item" key={city.id} >
          <a href="#" onClick={ e => { this.props.dispatch(changeCurrentCityAndGetWeather(city)) } } >{city.name}</a>
          
        </div>
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
