import * as ActionTypes from '../actions/cities'

export default function ui(state = {
  list: [],
  current: null,
  savedCitiesValid: false,
  lat: null,
  lon: null,
  isGeocodeFetching: false,
  geoJson: {},
  isGeocodeError: false,
  errorMessage: null
}, action) {

  switch (action.type) {

    case ActionTypes.REQUEST_REVERSE_GEOCODE:
      return Object.assign({}, state, {
        isGeocodeFetching: true
      });

    case ActionTypes.RECEIVE_REVERSE_GEOCODE:
      return Object.assign({}, state, {
        isGeocodeFetching: false,
        geoJson: action.geoJson
      });

    case ActionTypes.RECEIVE_GEOCODE_ERROR:
      return Object.assign({}, state, {
        isGeocodeFetching: false,
        isGeocodeError: true,
        errorMessage: action.msg
      });

    case ActionTypes.ADD_CITY:
      return Object.assign({}, state, {
        list: [
          ...state.list,
          action.city
        ],
        current: action.city
      });

    case ActionTypes.ADD_COORDS:
      return Object.assign({}, state, {
        lat: action.lat,
        lon: action.lon
      });

    case ActionTypes.REMOVE_CITY:
      const index = state.list.findIndex( (el, index, arr) => (el.id === action.city.id && el.name === action.city.name))

      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, index),
          ...state.list.slice(index+1, state.list.length),
        ],
        current: state.list[0],
        savedCitiesValid: false
      });

    case ActionTypes.CHANGE_CURRENT_CITY:
      return Object.assign({}, state, {
        current: action.city
      });

    case ActionTypes.UPDATE_LOCAL_STORAGE:
      localStorage.setItem('cities', JSON.stringify(state.list))
      return Object.assign({}, state, {
        savedCitiesValid: JSON.parse(localStorage.getItem('cities')).length === state.list.length
      });

    case ActionTypes.READ_LOCAL_STORAGE:
      const cities = JSON.parse(localStorage.getItem('cities', JSON.stringify(state.list))) || state.list
      return Object.assign({}, state, {
        list: cities,
        current: cities[0]
      });

    default:
      return state;
  }
}
