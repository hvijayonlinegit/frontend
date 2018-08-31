import * as types from './actionTypes';
import documentsApi from '../api/documentsApi';

export function loadCandMoreInfoSuccess(client){
  return {type: types.LOAD_CAND_MOREINFO_SUCCESS, client};
}
export function loadCandMoreinfo(link, client) {
  return function(dispatch) {
    console.log('calling link'+ link);
    
    //return dispatch(loadCandMoreInfoSuccess(client));
    return documentsApi.getAllDocuments(link).then(documents => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    client.documents = documents
      dispatch(loadCandMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
