import { addCity } from './cities'

import { reduceArrayByEqualKeys } from '../utils/arrayUtils'
import { xhr } from '../utils/xhr'
import { URLS } from '../config'

/*
 * Action Types
 */
export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER'
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER'

export const REQUEST_FORECAST_WEATHER = 'REQUEST_FORECAST_WEATHER'
export const RECEIVE_FORECAST_WEATHER = 'RECEIVE_FORECAST_WEATHER'

export const RECEIVE_WEATHER_ERROR = 'RECEIVE_WEATHER_ERROR'

/*
 * Action Creators
 */
function requestCurrentWeather() {
  return {
    type: REQUEST_CURRENT_WEATHER
  }
}

function receiveCurrentWeather(currentWeatherData) {
  return {
    type: RECEIVE_CURRENT_WEATHER,
    currentWeatherData
  }
}

function receiveWeatherError(msg) {
  return {
    type: RECEIVE_WEATHER_ERROR,
    msg
  }
}

export function getCurrentWeather(requestType) {

  return (dispatch, getState) => {
    const city = getState().ui.currentCitySearchInputValue;
    const cityId = getState().cities.current.id
    const {lat, lon} = getState().cities
    let url;

    dispatch(requestCurrentWeather())

    if (requestType === 'BY_CITY_NAME') {
      url = URLS.WEATHER_BY_CITY_NAME(city)
    } else if (requestType === 'BY_COORDS') {
      url = URLS.WEATHER_BY_COORDS(lat, lon)
    } else {
      url = URLS.WEATHER_BY_ID(cityId)
    }

    const onsuccess = function(res) {
      const json = JSON.parse(res.responseText)
      dispatch(receiveCurrentWeather(json))
        if (requestType === 'BY_CITY_NAME' || requestType === 'BY_COORDS') {
          dispatch(addCity({name: json.name, id: json.id}))
        }
    }

    const onservererror = function(res) {
      dispatch(receiveWeatherError(res.responseText))
    }

    /*
    const onload = function() {
      const json = JSON.parse(this.responseText)
      console.log( 'response', this);
      if (this.status >= 200 && this.status < 300) {
        dispatch(receiveCurrentWeather(json))
        if (requestType === 'BY_CITY_NAME' || requestType === 'BY_COORDS') {
          dispatch(addCity({name: json.name, id: json.id}))
        }
      } else {
        dispatch(receiveWeatherError(this.responseText))
      }
    }
    */

    xhr.get(url, onsuccess, onservererror);
  }

}

function requestForecastWeather() {
  return {
    type: REQUEST_FORECAST_WEATHER
  }
}

function receiveForecastWeather(json) { return {
    type: RECEIVE_FORECAST_WEATHER,
    forecastWeatherData: json.list
  }
}

export function getForecastWeather() {

  return (dispatch, getState) => {
    const cityId = getState().cities.current.id

    dispatch(requestForecastWeather())

    const URL = URLS.FORECAST_BY_ID(cityId)

    const onsuccess = (res) => dispatch(receiveForecastWeather(JSON.parse(res.responseText)))
    const onservererror = (res) => dispatch(receiveWeatherError(res.responseText))
    /*
    const onload = function() {
      const json = JSON.parse(this.responseText)
      if (this.status >= 200 && this.status < 300) {
        dispatch(receiveForecastWeather(json))
      } else {
        dispatch(receiveWeatherError(this.responseText))
      }
    }
    */

    xhr.get(URL, onsuccess, onservererror);
  }

}
