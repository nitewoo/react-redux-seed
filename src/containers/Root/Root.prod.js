import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../AppRouter'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}%>
        <div>
          <AppRouter />
        </div>
      </Provider>
    )
  }
}
