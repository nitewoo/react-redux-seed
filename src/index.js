import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { Route, IndexRoute } from 'react-router'

import {
  createStore,
  compose,
  combineReducers
} from 'redux'

import {
  ReduxRouter,
  // routerStateReducer,
  reduxReactRouter
} from 'redux-router'

// containers
import {
  App,
  Home,
  Counter,
  About
  // DevTools
} from './containers/index'
import DevTools from './containers/DevTools';

// reducers
import rootReducer from './reducers';

const store = compose(
  reduxReactRouter({ createHistory }),
  DevTools.instrument(),
)(createStore)(rootReducer)

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
  )
}

  // console.log(app)
ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <ReduxRouter>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="counter" component={Counter}/>
            <Route path="about" component={About}/>
          </Route>
        </ReduxRouter>
        <DevTools />
      </div>
    </Provider>
  </div>,

  document.getElementById('appContent')
)