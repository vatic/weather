import * as ActionTypes from '../actions/weather'

export default function weather(state = {
  isFetchingCurrent: false,
  isFetchingForecast: false,
  currentCity: null,
  mainWeatherValues: {},
  forecast: []
}, action) {

  switch (action.type) {

    case ActionTypes.REQUEST_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetchingCurrent: true
      });

    case ActionTypes.RECEIVE_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetchingCurrent: false,
        currentCity: action.currentWeatherData.name,
        mainWeatherValues: action.currentWeatherData.main
      });

    case ActionTypes.REQUEST_FORECAST_WEATHER:
      return Object.assign({}, state, {
        isFetchingForecast: true
      });

    case ActionTypes.RECEIVE_FORECAST_WEATHER:
      return Object.assign({}, state, {
        isFetchingForecast: false,
        forecast: action.forecastWeatherData
      });

    default:
      return state;
  }
}
