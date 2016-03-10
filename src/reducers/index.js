import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

// reducers
import i18n from './i18n'
import home from 'app/Home/reducer'

const rootReducer = {
  i18n,
  home,
  router: routerStateReducer
}

export function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers
  })
}
