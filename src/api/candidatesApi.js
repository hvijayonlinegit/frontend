import * as apiurl  from '../common/apiURL';
class CandidatesApi {

  static getAllCandidates() {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://localhost:8090/synerdy/api`
    //const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com/synergy/api`
    const request = new Request(apiurl.BASE_URL+`/synergy/api/candidates`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*',
        'Authorization':' Bearer ' + localStorage.getItem('token')
        
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getCandidates(link,token) {
    console.log('inside the get candidate'+link)
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CandidatesApi;
