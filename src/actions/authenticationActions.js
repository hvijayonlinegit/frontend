import axios from 'axios';
import { browserHistory} from 'react-router';
import * as apiurl  from '../common/apiURL';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USER
} from './actionTypes';

 //const ROOT_URL = apiurl.BASE_URL;
//const ROOT_URL = 'https://peaceful-mesa-72076.herokuapp.com';
export const signinUser = ({ usernameOrEmail, password }) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernameOrEmail, password })
        };
        // submit email/password to the server
        return fetch(`${apiurl.BASE_URL}/api/auth/signin`, requestOptions)
            .then(handleResponse)
            .then(user => {

                // if request is good...
                // - update state to indicate user is authenticated
                //fetchUser();
                dispatch({ type: AUTH_USER });
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let token = user.accessToken.toString();
                    localStorage.setItem('token', token);
                    //fetchUser();
                }
                
                // - save the jwt token
               //localStorage.setItem('token', user.token);

                // - redirect to the route '/feature'
                browserHistory.push('/');

            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                localStorage.removeItem('token');
                dispatch(authError('Bad Login Info'));
            });
    };
};

export const signupUser = ({ email,name, password, username }) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email,name, password, username  })
        };
        // submit email/password to the server
        return fetch(`${apiurl.BASE_URL}/api/auth/signup`, requestOptions)
            .then(handleResponse)
            .then(response => {
                //dispatch({ type: AUTH_USER });
                //localStorage.setItem('token', response.data.token);
                browserHistory.push('/signin');
            })
            .catch(err => {
                dispatch(authError('Bad Sign up Info'));
            });
    };
};


export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
};

export const fetchUser = () => {
    return (dispatch) => {
        return fetch(`${apiurl.BASE_URL}/user/me`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
          // headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTM0MDA4MTU2LCJleHAiOjE1MzQ2MTI5NTZ9.1IDDb_5O-GPhVYO0OMHlXNqTVz5qiV1pNZ46PKujlbxVaHZnKhZDhun5Bw_gguKC2LHiF7c7ZaJTNibg8_VeqQ'}
        })
        .then(handleResponse)
        .then(response =>{
            console.log('setting respone '+response.name);
            dispatch({
                
                type: FETCH_USER,
                payload: response
             });
        });
    };
};
function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //dispatch(authError('Bad Login Info'));
                
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}