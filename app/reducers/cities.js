import * as ActionTypes from '../actions/cities'

export default function ui(state = {
  list: [{name: 'Saint-Petersburg', id: 498817}],
  current: {name: 'Saint-Petersburg', id: 498817}
}, action) {

  switch (action.type) {

    case ActionTypes.ADD_CITY:
      return Object.assign({}, state, {
        list: [
          ...state.list,
          action.city
        ],
        current: action.city
      });

    case ActionTypes.CHANGE_CURRENT_CITY:
      return Object.assign({}, state, {
        current: action.city
      });

    default:
      return state;
  }
}
