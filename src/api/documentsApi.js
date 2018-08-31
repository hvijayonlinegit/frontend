
class DocumentsApi {

  static getAllDocuments(link) {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://localhost:8090`
    //const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com`
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*',
        // eslint-disable-next-line
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static download(link, client) {
    //const BASE_URL = `http://localhost:8090`
   const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com`
    console.log('inside the get candidate'+link+client)
    // eslint-disable-next-line
    const request = new Request(BASE_URL+`/download`+'?id='+link+'&key='+client, {
      method: 'GET',
      headers: new Headers({
        'responseType': 'blob',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {

      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default DocumentsApi;
