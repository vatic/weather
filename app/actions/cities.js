import { getCurrentWeather } from './weather'
import { changeTab } from './ui'

/*
 * Action Types
 */
export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'
export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY'
export const UPDATE_LOCAL_STORAGE = 'UPDATE_LOCAL_STORAGE'
export const READ_LOCAL_STORAGE = 'READ_LOCAL_STORAGE'

/*
 * Action Creators
 */
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
    dispatch(addCityToState(city))
    dispatch(updateLocalStorage())
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

