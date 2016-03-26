import { getCurrentWeather } from './weather'

/*
 * Action Types
 */
export const ADD_CITY = 'ADD_CITY'
export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY'

/*
 * Action Creators
 */
export function addCity(city) {
  return {
    type: ADD_CITY,
    city
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
