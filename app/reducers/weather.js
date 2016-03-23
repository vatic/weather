import * as ActionTypes from '../actions/weather'

export default function weather(state = {
  isFetching: false,
  currentCity: null,
  mainWeatherValues: {}
}, action) {

  switch (action.type) {

    case ActionTypes.REQUEST_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });

    case ActionTypes.RECEIVE_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        currentCity: action.currentWeatherData.name,
        mainWeatherValues: action.currentWeatherData.main
      });

    default:
      return state;
  }
}
