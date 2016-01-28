import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createHistory } from 'history'
import rootReducer from '../reducers'
import DevTools from '../app/DevTools'

const middleware = [thunk]

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory }),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}
