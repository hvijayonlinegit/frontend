import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function catReducer(state = initialState.clients.accountses, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
    return Object.assign({}, state, action.clients)

    case types.CREATE_CAT_SUCCESS:
      const newState = Object.assign([], state)
      newState.accountses.push(action.cat)
      browserHistory.push(`/clients`)
      return newState
    case types.UPDATE_CAT_SUCCESS:
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    case types.DELETE_CAT_SUCCESS: {
      const delNewState = Object.assign([], state)
      const indexOfCatToDelete = delNewState.accountses.findIndex(
        account => {
          console.log(account.name);
          return account.name === action.cat.name
        })
       delNewState.accountses.splice(indexOfCatToDelete, 1)
      browserHistory.push('/clients')
      return delNewState
    }
    default:
      return state;
  }
}

// return action.cats;
// return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))


// case types.LOAD_REQUIREMENTS_SUCCESS:
//   // return action.cats;
//  // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
//  const nextState = { ...state};
//  nextState.requirements = action.requirements.requirementses;
//  const newState = Object.assign({}, nextState);
//  browserHistory.push('/requirements')
//  return newState
 // case types.LOAD_CANDIDATES_SUCCESS:
 //   // return action.cats;
 //  // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
 //  browserHistory.push(`/requirements`)
 //  return Object.assign({}, state, action.candidates)
