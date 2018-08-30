import * as types from './actionTypes';
import candidatesApi from '../api/candidatesApi';


export function loadCandidatesSuccess(candidates) {
  return {type: types.LOAD_CANDIDATES_SUCCESS, candidates};
}

export function loadCandidate(link) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    console.log('calling link'+ link);
    return candidatesApi.getCandidates(link).then(candidates => {
    //  console.log('inside candidate action.js'+candidates._embedded.candidateses[0].title);
      dispatch(loadCandidatesSuccess(candidates._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadCandidates() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return candidatesApi.getAllCandidates().then(candidates => {
      //console.log('inside cat action.js'+clients._embedded.accountses[0].name);
      dispatch(loadCandidatesSuccess(candidates._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}
