import {combineReducers} from 'redux';
import clients from './clientReducer';
import requirements from './requirementReducer';
import candidates from './candidateReducer';
import moreinfo from './moreinfoReducer';
import reqmoreinfo from './reqmoreinfoReducer';
import candmoreinfo from './candmoreinfoReducer';
import docmoreinfo from './docmoreinfoReducer'
import { reducer as authReducer } from './auth';

const rootReducer = combineReducers({
  // short hand property names
  clients,
  requirements,
  candidates,
  moreinfo,
  reqmoreinfo,
  candmoreinfo,
  docmoreinfo,
  auth: authReducer
})

export default rootReducer;
