import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function requirementReducer(state = initialState.requirements, action) {
  switch(action.type) {
    case types.LOAD_REQUIREMENTS_SUCCESS:
     return Object.assign({}, state, action.requirements)
    default:
      return state;
  }
}
