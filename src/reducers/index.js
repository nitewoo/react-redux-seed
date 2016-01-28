import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

// reducers
import i18n from './i18n'
import counter from 'app/Counter/reducer'

const rootReducer = combineReducers({
  i18n,
  counter,
  router: routerStateReducer
})

export default rootReducer
