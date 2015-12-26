import { createStore, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
// import { persistState } from 'redux-devtools'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const finalCreateStore = compose(
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
