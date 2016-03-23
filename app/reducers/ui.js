import * as ActionTypes from '../actions/ui'

export default function ui(state = {
  isTested: true,
}, action) {

  switch (action.type) {

    case ActionTypes.UI_TEST:
      return Object.assign({}, state, {
        isTested: true
      });

    default:
      return state;
  }
}
