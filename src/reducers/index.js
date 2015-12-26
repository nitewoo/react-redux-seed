import { combineReducers } from 'redux'
import {
  // ReduxRouter,
  // reduxReactRouter,
  routerStateReducer
} from 'redux-router'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
  router: routerStateReducer
});

export default rootReducer;
