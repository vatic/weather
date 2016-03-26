import { addCity } from './cities'

import { reduceArrayByEqualKeys } from '../utils/arrayUtils'

/*
 * Action Types
 */
export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER'
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER'

export const REQUEST_FORECAST_WEATHER = 'REQUEST_FORECAST_WEATHER'
export const RECEIVE_FORECAST_WEATHER = 'RECEIVE_FORECAST_WEATHER'

const API_KEY = '269c7810b0e920996f67e99515169306'

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

export function getCurrentWeather(requestType) {

  return (dispatch, getState) => {
    const city = getState().ui.currentCitySearchInputValue;
    const cityId = getState().cities.current.id
    //const cityId = 498817;
    let url;

    dispatch(requestCurrentWeather())

    if (requestType === 'BY_CITY_NAME') {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    } else {
      url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
      //const URL = 'http://localhost:8080/current.json'
    }

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    xhr.open('GET', url, true);

    xhr.onload = function() {
      const json = JSON.parse(this.responseText)
      console.log( 'response', this);
      dispatch(receiveCurrentWeather(json))
    }

    xhr.onerror = function() {
      alert( 'Ошибка ' + this.status );
    }

    xhr.send();
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

  return dispatch => {
    dispatch(requestForecastWeather())

    //const URL = 'http://api.openweathermap.org/data/2.5/forecast?id=561887&appid=${API_KEY}&units=metric'
    const URL = 'http://localhost:8080/forecast.json'

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    xhr.open('GET', URL, true);

    xhr.onload = function() {
      const json = JSON.parse(this.responseText)

      //const reducedForecast = reduceArrayByEqualKeys(json.list, 'dt_txt', (dtTxt) => (new Date(dtTxt)).getDate() )
      dispatch(receiveForecastWeather(json))
    }

    xhr.onerror = function() {
      alert( 'Ошибка ' + this.status );
    }

    xhr.send();
  }

}
