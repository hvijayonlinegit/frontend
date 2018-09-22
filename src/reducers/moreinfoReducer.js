import * as types from '../actions/actionTypes';
import initialState from './initialState';

import {browserHistory} from 'react-router';
export default function moreinfoReducer(state = initialState.clients.moreinfo, action) {
  switch(action.type) {
      case types.CREATE_REQUIREMENT_SUCCESS:
      const newState = Object.assign([], state)
      newState.client.requirements.requirementses.push(action.requirement)
      browserHistory.push(`/`)
      return newState
      case types.LOAD_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.client =  action.client
     // browserHistory.push('/clients')
      return clientState
    default:
      return state;
  }
}
