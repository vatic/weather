import * as ActionTypes from '../actions/ui'

export default function ui(state = {
  currentCitySearchInputValue: null
}, action) {

  switch (action.type) {

    case ActionTypes.CITY_SEARCH_INPUT_CHANGE:
      return Object.assign({}, state, {
        currentCitySearchInputValue: action.inputValue
      });

    default:
      return state;
  }
}
