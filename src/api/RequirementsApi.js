import * as apiurl  from '../common/apiURL';
class RequirementsApi {

  static getAllRequirements() {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://localhost:8090/synergy/api`
    //const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com/synergy/api`
    const request = new Request(apiurl.BASE_URL+`/synergy/api/requirementses`, {
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
  static getRequirements(link) {
    console.log('inside the get requirement'+link)
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
  static createRequirement(requirement) {
    //const BASE_URL = 'https://peaceful-mesa-72076.herokuapp.com/synergy/api'
    //const BASE_URL = `http://localhost:8090/synergy/api`
   // console.log('create client'+requirement.account_id)
    let accountid= requirement.id
    const request = new Request(apiurl.BASE_URL+`/accounts/`+accountid+'/requitements', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      }),
      body: JSON.stringify(requirement)
    });
    console.log(request.body)
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default RequirementsApi;
