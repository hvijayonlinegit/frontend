import * as types from './actionTypes';
import requirementsApi from '../api/RequirementsApi';


export function loadRequirementsSuccess(requirements) {
  return {type: types.LOAD_REQUIREMENTS_SUCCESS, requirements};
}

export function loadRequirement(link) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    console.log('calling link'+ link);
    return requirementsApi.getRequirements(link).then(requirements => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
      dispatch(loadRequirementsSuccess(requirements._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadRequirements() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return requirementsApi.getAllRequirements().then(requirements => {
      //console.log('inside cat action.js'+clients._embedded.accountses[0].name);
      dispatch(loadRequirementsSuccess(requirements._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}
