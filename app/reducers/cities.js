import * as ActionTypes from '../actions/cities'

export default function ui(state = {
  list: [{name: 'Saint Petersburg', id: 498817}],
  current: {name: 'Saint Petersburg', id: 498817},
  savedCitiesValid: false
}, action) {

  switch (action.type) {

    case ActionTypes.ADD_CITY:
      return Object.assign({}, state, {
        list: [
          ...state.list,
          action.city
        ],
        current: action.city,
        savedCitiesValid: false
      });

    case ActionTypes.CHANGE_CURRENT_CITY:
      return Object.assign({}, state, {
        current: action.city
      });

    case ActionTypes.UPDATE_LOCAL_STORAGE:
      localStorage.setItem('cities', JSON.stringify(state.list))
      return Object.assign({}, state, {
        savedCitiesValid: JSON.parse(localStorage.getItem('cities')).length === state.list.length
      });

    case ActionTypes.READ_LOCAL_STORAGE:
      const cities = JSON.parse(localStorage.getItem('cities', JSON.stringify(state.list))) || state.list
      return Object.assign({}, state, {
        list: cities
      });

    default:
      return state;
  }
}
