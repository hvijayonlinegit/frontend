
class DocumentsApi {

  static getAllDocuments() {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    const BASE_URL = `http://localhost:8090`
    //const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com`
    const request = new Request(BASE_URL+`/list`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*',
        // eslint-disable-next-line
        'Authorization':' Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTM1MTA5ODExLCJleHAiOjE1MzU3MTQ2MTF9.S2FMp0qEtpNlLaySe_Jy_PcxL1YlZV78Aoas4SSjCxl4czOMxwi1OsrcDeDJuH0Bt_T03OV7WWoeOTyaWyiudg'
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static download(link, client,token) {
    const BASE_URL = `http://localhost:8090`
   // const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com`
    console.log('inside the get candidate'+link+client)
    // eslint-disable-next-line
    const request = new Request(BASE_URL+`/download`+'?id='+link+'&key='+client, {
      method: 'GET',
      headers: new Headers({
        'responseType': 'blob',
        'Authorization':' Bearer ' + token
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
