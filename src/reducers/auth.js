import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USER,
    REQUIRE_ADMIN_ACCESS
} from '../actions/actionTypes';

import {browserHistory} from 'react-router';
import initialState from './initialState';

export const reducer = (state = initialState.auth, action) => {

    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true }
        case UNAUTH_USER:
        browserHistory.push(`/signin`)
            return { ...state, authenticated: false, userdetails:''}
        case AUTH_ERROR:
            return { ...state, error: action.payload }
        case FETCH_USER:
         return {... state,  userdetails: action.payload.name}
        case REQUIRE_ADMIN_ACCESS:
       
         browserHistory.push(`/adminaccess`)
         return state
        default:
            return state;
    }
};
