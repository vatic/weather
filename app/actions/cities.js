import { getCurrentWeather } from './weather'

/*
 * Action Types
 */
export const ADD_CITY = 'ADD_CITY'
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

export function addCity(city) {
  return (dispatch, getState) => {
    dispatch(addCityToState(city))
    dispatch(updateLocalStorage())
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

