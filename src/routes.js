import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import ClientsPage from './containers/ClientsPage';
import RequirementsPage from './components/clients/RequirementsPage';
import CandidatesPage from './components/clients/CandidatesPage';
import NewClientPage from './components/clients/NewClientPage';
import RequireAuth from './containers/auth/require_auth';
import Signin from './containers/auth/signin';
import Signout from './containers/auth/signout';
import Signup from './containers/auth/signup';

export default (
  <div>
    <Route path="/" component={App}>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signout" component={Signout} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/clients" component={RequireAuth(ClientsPage)} >
      </Route>
      <Route path="/requirements" component = {RequirementsPage}></Route>
      <Route path="/candidates" component = {CandidatesPage}></Route>
      <Route path="/clients/new" component={NewClientPage} />
  </Route> 
  </div>
);
