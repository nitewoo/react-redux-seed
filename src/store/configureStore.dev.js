import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createHistory } from 'history'
import { createReducer } from '../reducers'
import DevTools from '../app/DevTools'

const middleware = [thunk]

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory }),
  DevTools.instrument()
)(createStore)


export function injectAsyncReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

export default function configureStore(initialState) {
  const store = finalCreateStore(createReducer(), initialState)
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}