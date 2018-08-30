import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reqmoreinfoReducer(state = initialState.clients.reqmoreinfo, action) {
  switch(action.type) {
      case types.LOAD_REQ_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.requirement =  action.client
      //browserHistory.push('/clients')
      return clientState
    default:
      return state;
  }
}
