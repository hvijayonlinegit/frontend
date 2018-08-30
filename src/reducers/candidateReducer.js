import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function candidateReducer(state = initialState.candidates, action) {
  switch(action.type) {
    case types.LOAD_CANDIDATES_SUCCESS:
     return Object.assign({}, state, action.candidates)
    default:
      return state;
  }
}
