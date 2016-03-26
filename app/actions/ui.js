/*
 * Action Types
 */
export const CITY_SEARCH_INPUT_CHANGE = 'CITY_SEARCH_INPUT_CHANGE'

/*
 * Action Creators
 */
export function citySearchInputChange(inputValue) {
  return {
    type: CITY_SEARCH_INPUT_CHANGE,
    inputValue
  }
}
