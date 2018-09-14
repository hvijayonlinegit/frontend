import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import ClientsPage from './containers/ClientsPage';
import RequirementsPage from './containers/RequirementsPage';
import CandidatesPage from './containers/CandidatesPage';
import RequireAuth from './containers/auth/require_auth';
import Signin from './containers/auth/signin';
import Signout from './containers/auth/signout';
import Signup from './containers/auth/signup';
import ServerErrorPage from './common/ServerErrorPage'
import RequireAdminAccess from './common/RequireAdminAccess'
export default (
  <div>
    <Switch>
      <Route path="/" component={App}>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/clients" component={RequireAuth(ClientsPage)} >
        </Route>
        <Route path="/requirements" component = {RequirementsPage}></Route>
        <Route path="/candidates" component = {CandidatesPage}></Route>
      </Route> 
      <Route path="/500" component={ServerErrorPage}/>
      <Route path="/adminaccess" component ={RequireAdminAccess}/>
    </Switch>
  </div>
);
