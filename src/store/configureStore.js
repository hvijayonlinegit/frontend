import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
export default function configureStore(initialState) {

  const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
  return createStore(
    rootReducer,
    initialState,
     composeEnhancers(applyMiddleware(thunk))
  );
}
