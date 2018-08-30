import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {loadClients} from './actions/clientActions';
import {loadRequirements} from './actions/requirementActions';
import {loadCandidates} from './actions/candidateActions'
import { AUTH_USER } from './actions/actionTypes';
const store = configureStore();

const token = localStorage.getItem('token');
// if we have a token, consiger the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

store.dispatch(loadClients());
store.dispatch(loadRequirements());
store.dispatch(loadCandidates());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
