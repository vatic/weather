/*
 * Action Types
 */
export const CITY_SEARCH_INPUT_CHANGE = 'CITY_SEARCH_INPUT_CHANGE'
export const CHANGE_TAB = 'CHANGE_TAB'

/*
 * Action Creators
 */
export function citySearchInputChange(inputValue) {
  return {
    type: CITY_SEARCH_INPUT_CHANGE,
    inputValue
  }
}

export function changeTab(tabName) {
  return {
    type: CHANGE_TAB,
    tabName
  }
}
