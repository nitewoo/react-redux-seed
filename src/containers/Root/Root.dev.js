import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../AppRouter'
import DevTools from '../DevTools'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <AppRouter />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
