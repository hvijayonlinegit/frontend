import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function candmoreinfoReducer(state = initialState, action) {
  switch(action.type) {
      case types.LOAD_DOC_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      browserHistory.push('/clients')
      return clientState
    default:
      return state;
  }
}
