import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function candmoreinfoReducer(state = initialState.clients.candmoreinfo, action) {
  switch(action.type) {
      case types.LOAD_CAND_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.candidate =  action.client
     // browserHistory.push('/clients')
      return clientState
      case types.LOAD_CAND_MOREINFO_FAILURE:
      const clientState1 = Object.assign([], state)
      clientState1.candidate =  {
        documents: [],
      }
      return clientState1
    default:
      return state;
  }
}
