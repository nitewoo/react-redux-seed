import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import constant from './constant'
import AppRouter from './app/AppRouter'
import DevTools from './app/DevTools'

const store = configureStore()

class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <AppRouter />
          {__DEVTOOLS__ ? <DevTools /> : ''}
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('appContent')
)