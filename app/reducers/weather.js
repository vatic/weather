import * as ActionTypes from '../actions/weather'
import { reduceArrayByEqualKeys } from '../utils/arrayUtils'

export default function weather(state = {
  isFetchingCurrent: false,
  isFetchingForecast: false,
  currentCity: null,
  mainWeatherValues: {},
  forecast: [],
  isServerError: false,
  isNetworkError: false,
  errorMessage: null
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

    case ActionTypes.RECEIVE_WEATHER_ERROR:
      return Object.assign({}, state, {
        isFetchingCurrent: false,
        isFetchingForecast: false,
        isServerError: true,
        errorMessage: action.msg
      });

    case ActionTypes.REQUEST_FORECAST_WEATHER:
      return Object.assign({}, state, {
        isFetchingForecast: true
      });

    case ActionTypes.RECEIVE_FORECAST_WEATHER:
      const reducedForecast = reduceArrayByEqualKeys(action.forecastWeatherData, 'dt', (dt) => (new Date(dt*1000)).getDate() )
      console.log('reduced',reducedForecast)
      return Object.assign({}, state, {
        isFetchingForecast: false,
        forecast: action.forecastWeatherData,
        reducedForecast
      });

    default:
      return state;
  }
}
