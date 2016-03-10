import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router'

// view containers
import App from './App'
import Home from './Home'

import { createRoutes } from './routes'

export default class AppRouter extends Component {
  render() {
    const appRoute = {
      path: '/',
      component: App,
      indexRoute: { component: Home },
      childRoutes: createRoutes(this.props.store)
    }
    return <ReduxRouter routes={appRoute} />
  }
}