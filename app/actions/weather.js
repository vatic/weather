/*
 * Action Types
 */
export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER'
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER'

/*
 * Action Creators
 */
function requestCurrentWeather() {
  return {
    type: REQUEST_CURRENT_WEATHER
  }
}

function receiveCurrentWeather() {
  return {
    type: RECEIVE_CURRENT_WEATHER
  }
}

export function getCurrentWeather() {

  return dispatch => {
    dispatch(requestCurrentWeather())

    const URL = 'http://api.openweathermap.org/data/2.5/weather?id=561887&appid=269c7810b0e920996f67e99515169306&units=metric'

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    xhr.open('GET', URL, true);

    xhr.onload = function() {
      console.log( 'response', this.responseText );
      dispatch(receiveCurrentWeather())
    }

    xhr.onerror = function() {
      alert( 'Ошибка ' + this.status );
    }

    xhr.send();
  }

}
