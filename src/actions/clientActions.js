import * as types from './actionTypes';
import clientsApi from '../api/clientsApi';
import * as moreinfoActions from '../actions/moreinfoActions';
export function loadCatsSuccess(clients, self) {
  return {type: types.LOAD_CATS_SUCCESS, clients , self};
}
export function loadCatsFailure(clients, self) {
  return {type: types.LOAD_CATS_FAILURE, clients , self};
}
export function loadSignInPage(){
  return {type: types.UNAUTH_SIGNIN_PAGE};
}
export function loadNeedAdminAccess(){
  return {type: types.REQUIRE_ADMIN_ACCESS}
}
export function updateCatSuccess(cat) {
  return {type: types.UPDATE_CAT_SUCCESS, cat}
}

export function createCatSuccess(cat) {
  return {type: types.CREATE_CAT_SUCCESS, cat}
}

export function deleteCatSuccess(cat) {
  return {type: types.DELETE_CAT_SUCCESS, cat}
}
// export function loadRequirementsSuccess(requirements) {
//   return {type: types.LOAD_REQUIREMENTS_SUCCESS, requirements};
// }
export function loadCandidatesSuccess(candidates) {
  return {type: types.LOAD_CANDIDATES_SUCCESS, candidates};
}

export function loadClients() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return clientsApi.getAllClients().then(clients => {
      if(!clients.message){
        // Code changes for default loading
        let sortedClients = clients._embedded.accountses.sort(
          (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
        );
        sortedClients.map((n,index) => {
          const link= n._links.requirements.href
          if(index ===0){
            dispatch(moreinfoActions.loadMoreinfo(link, n));
           //dispatch(loadCatsSuccess(clients._embedded, n));
          }
          return '';
        }
      );
      dispatch(loadCatsSuccess(clients._embedded));
      }else{
        if(clients.status === 401){
          dispatch(loadSignInPage())
        }
        if(clients.status === 500)
        {
          dispatch(loadCatsFailure(clients.message))
        }
        dispatch(loadCatsFailure(clients.message))
        
      }
    
    }).catch(error => {
      throw(error);
    });
  };
}
// export function loadRequirements(link) {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     console.log('calling link'+ link);
//     return clientsApi.getRequirements(link).then(requirements => {
//     //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
//       dispatch(loadRequirementsSuccess(requirements._embedded));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
export function loadCandidates(link) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    console.log('calling link'+ link);
    return clientsApi.getCandidates(link).then(candidates => {
      console.log('inside requirement action.js'+candidates._embedded.candidates[0].firstname);
      dispatch(loadCandidatesSuccess(candidates._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCat(cat) {
  return function (dispatch) {
    return clientsApi.updateCat(cat).then(responseCat => {
      dispatch(updateCatSuccess(responseCat));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCat(client) {
  return function (dispatch) {
    return clientsApi.createCat(client).then(responseCat => {
      if(!responseCat.message){
        const link= responseCat._links.requirements.href
        dispatch(moreinfoActions.loadMoreinfo(link, responseCat));
        dispatch(createCatSuccess(responseCat));
      }
      else{
        dispatch(loadCatsFailure(responseCat.message))
      }
     
      //return responseCat;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCat(cat , link) {
  return function(dispatch) {
    return clientsApi.deleteCat(cat, link).then(() => {
      console.log(`Deleted ${cat.name}`)
      dispatch(deleteCatSuccess(cat));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
