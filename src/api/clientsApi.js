

// fetch("/login", {
//   method: "POST",
//   body: form
// })

class clientsApi {
  
  static getAllClients() {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://192.168.0.17:8090/accounts`
   // const BASE_URL = `http://localhost:8090/synergy/api`
   const BASE_URL = 'https://peaceful-mesa-72076.herokuapp.com/synergy/api'
    const request = new Request(BASE_URL+`/accountses`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*'
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {

      return error;
    });
  }

  static updateCat(cat) {
    const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(client) {
    const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com/synergy/api`
    console.log(client.account_team)
    const request = new Request(BASE_URL+`/accountses`, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(client)
    });
    console.log(request.body)
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  // static getRequirements(link) {
  //   console.log('inside the get requirement'+link)
  //   const request = new Request(link, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Accept': 'application/json'
  //     })
  //   });
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }
  static getCandidates(link) {
    console.log('inside the get requirement'+link)
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json'
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCat(cat, link) {
    const request = new Request(link, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default clientsApi;
