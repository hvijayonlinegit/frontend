import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moreinfoReducer(state = initialState.clients.moreinfo, action) {
  switch(action.type) {
      case types.LOAD_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.client =  action.client
     // browserHistory.push('/clients')
      return clientState
    default:
      return state;
  }
}
