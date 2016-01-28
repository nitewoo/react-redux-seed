import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router'

// view containers
import App from './App'
import Home from './Home'
import About from './About'
import Counter from './Counter'



export default class AppRouter extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="counter" component={Counter}/>
          <Route path="about" component={About}/>
          <Route path="*" component={Home}/>
        </Route>
      </ReduxRouter>
    )
  }
}