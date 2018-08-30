import * as types from './actionTypes';
import requirementsApi from '../api/RequirementsApi';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
export function loadMoreInfoSuccess(client){
  return {type: types.LOAD_MOREINFO_SUCCESS, client};
}
export function loadMoreinfo(link, client) {

  return function(dispatch) {
    console.log('calling link'+ link);
    return requirementsApi.getRequirements(link).then(requirements => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    requirements._embedded.requirementses.map((n, index) =>{
      const link= n._links.candidates.href
      if(index ===0){
        dispatch(reqmoreinfoActions.loadReqMoreinfo(link, n));
       }
      return '';
    });
    client.requirements = requirements._embedded
    dispatch(loadMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
