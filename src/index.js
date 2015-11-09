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
  routerStateReducer,
  reduxReactRouter
} from 'redux-router'

// containers
import {
  App,
  Home,
  Counter,
  About
} from './containers/index'

// reducers
import counter from './reducers/counter'

const reducer = combineReducers({
  router: routerStateReducer,
  counter: counter,
})

const initialState = {
  counter: {
    count: 3
  }
}

const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(reducer, initialState)

  // console.log(app)
ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="counter" component={Counter}/>
        <Route path="about" component={About}/>
      </Route>
    </ReduxRouter>
  </Provider>,

  document.getElementById('appContent')
)