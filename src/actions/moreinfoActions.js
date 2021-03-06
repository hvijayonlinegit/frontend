import * as types from './actionTypes';
import requirementsApi from '../api/RequirementsApi';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as clientActions from '../actions/clientActions';

import * as apiurl  from '../common/apiURL';
export function loadMoreInfoSuccess(client){
  return {type: types.LOAD_MOREINFO_SUCCESS, client};
}
export function createRequirementSuccess(requirement) {
  return {type: types.CREATE_REQUIREMENT_SUCCESS, requirement}
}
export function loadMoreinfo(link, client) {

  return function(dispatch) {
    console.log('calling link'+ link);
    return requirementsApi.getRequirements(link).then(requirements => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    if(!requirements.message){
        if(requirements._embedded.requirementses.length === 0){
          dispatch(reqmoreinfoActions.loadReqMoreinfofailure());
          dispatch(candmoreinfoActions.loadCandMoreinfofailure());
        }else{
          // Code changes for default loading
          let sortedRequirements = requirements._embedded.requirementses.sort(
            (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
          );
          sortedRequirements.map((n, index) =>{
            const link= n._links.candidates.href
            if(index ===0){
              dispatch(reqmoreinfoActions.loadReqMoreinfo(link, n));
            }
            return '';
          });
        }
        
        client.requirements = requirements._embedded
        dispatch(loadMoreInfoSuccess(client));
       } else{
          if(requirements.status === 401){
            dispatch(clientActions.loadSignInPage())
          }
          if(requirements.status === 500)
          {
            dispatch(clientActions.loadCatsFailure(requirements.message))
          }
          if(requirements.status === 403)
          {
            dispatch(clientActions.loadNeedAdminAccess(requirements.message))
          }
          //dispatch(clientActions.loadCatsFailure(requirements.message))
          
        }
        }).catch(error => {
          throw(error);
        });
      };
      

}
export function createRequirement(requirement) {
  return function (dispatch) {
    return requirementsApi.createRequirement(requirement).then(response => {
      if(!response.message){

        const link= response._links.candidates.href;
        dispatch(reqmoreinfoActions.loadReqMoreinfo(link, response));
        dispatch(createRequirementSuccess(response));
      }
      else{
       // dispatch(loadCatsFailure(response.message))
      }
      
    }).catch(error => {
      throw(error);
    });
  };
}