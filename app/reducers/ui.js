import * as ActionTypes from '../actions/ui'

export default function ui(state = {
  currentCitySearchInputValue: null,
  currentTab: 'CURRENT'
}, action) {

  switch (action.type) {

    case ActionTypes.CITY_SEARCH_INPUT_CHANGE:
      return Object.assign({}, state, {
        currentCitySearchInputValue: action.inputValue
      });
    case ActionTypes.CHANGE_TAB:
      return Object.assign({}, state, {
        currentTab: action.tabName
      });

    default:
      return state;
  }
}
