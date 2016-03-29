import { getCurrentWeather } from './weather'
import { changeTab } from './ui'

import { xhr } from '../utils/xhr'

import { URLS } from '../config'

/*
 * Action Types
 */
export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'
export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY'
export const UPDATE_LOCAL_STORAGE = 'UPDATE_LOCAL_STORAGE'
export const READ_LOCAL_STORAGE = 'READ_LOCAL_STORAGE'
export const ADD_COORDS = 'ADD_COORDS'
export const REQUEST_REVERSE_GEOCODE = 'REQUEST_REVERSE_GEOCODE'
export const RECEIVE_REVERSE_GEOCODE = 'RECEIVE_REVERSE_GEOCODE'
export const RECEIVE_GEOCODE_ERROR = 'RECEIVE_GEOCODE_ERROR'

/*
 * Action Creators
 */
function requestReverseGeocode(lat,lon) {
  return {
    type: REQUEST_REVERSE_GEOCODE,
    lat,
    lon
  }
}

function receiveReverseGeocode(geoJson) {
  return {
    type: RECEIVE_REVERSE_GEOCODE,
    geoJson
  }
}

function receiveGeocodeError(msg) {
  return {
    type: RECEIVE_GEOCODE_ERROR,
    msg
  }
}

export function reverseGeocode(lat,lon) {


  return (dispatch, getState) => {


    dispatch(requestReverseGeocode())

    const onsuccess = (res) => dispatch(dispatch(receiveReverseGeocode(JSON.parse(res.responseText))))
    const onservererror = (res) => dispatch(receiveGeocodeError(res.statusText))

    xhr.get(URLS.NOMINATIM_URL(lat, lon), onsuccess, onservererror);

  }

}

export function promptUserLocation() {

  return (dispatch, getState) => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const { latitude, longitude } = position.coords
      dispatch(addCoords(latitude, longitude))
      dispatch(getCurrentWeather('BY_COORDS'))
      dispatch(reverseGeocode(latitude, longitude))
    }, (error) => {
      console.log('get location denied', error);
      dispatch(changeCurrentCityAndGetWeather(getState().cities.list[0]))
    });
  }
}

export function addCoords(lat, lon) {
  return {
    type: ADD_COORDS,
    lat,
    lon
  }
}

export function addCityToState(city) {
  return {
    type: ADD_CITY,
    city
  }
}

export function removeCityFromState(city) {
  return {
    type: REMOVE_CITY,
    city
  }
}

export function addCity(city) {
  return (dispatch, getState) => {
    if ( getState().cities.list.map( c => c.id ).indexOf(city.id) === -1 ) {
      dispatch(addCityToState(city))
      dispatch(updateLocalStorage())
      dispatch(changeTab('CURRENT'))
    }
  }
}

export function removeCity(city) {
  return (dispatch, getState) => {
    dispatch(removeCityFromState(city))
    dispatch(updateLocalStorage())
    dispatch(changeCurrentCityAndGetWeather(getState().cities.list[0]))
  }
}

export function changeCurrentCity(city) {
  return {
    type: CHANGE_CURRENT_CITY,
    city
  }
}
export function changeCurrentCityAndGetWeather(city) {
  return (dispatch, getState) => {
    dispatch(changeCurrentCity(city))
    dispatch(getCurrentWeather())
    dispatch(changeTab('CURRENT'))

  }
}

export function updateLocalStorage() {
  return {
    type: UPDATE_LOCAL_STORAGE
  }
}

export function readLocalStorage() {
  return {
    type: READ_LOCAL_STORAGE
  }
}

