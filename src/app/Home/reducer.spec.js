import 'babel-polyfill'
import { expect } from 'chai'
import home, { homeActions } from './reducer'
import request from 'superagent-bluebird-promise'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mocker from 'superagent-mock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// mock data config
const config = [
  {
    pattern: 'http://localhost:7070/api/loadInfo',
    fixtures: function () {
      return { message: 'This came from the mock server' }
    },
    callback: function (match, data) {
      return { text : JSON.stringify(data) }
    }
  }
]
const superagentMock = mocker(request, config)

describe('home reducer', () => {

  it('should handle initialState', () => {
    expect(home()).to.eql({
      count: 0
    })
  })
  
  it('should fetch api server info', (done) => {

    const expectedActions = [
      { type: 'request_api_server_info' },
      { type: 'receive_api_server_info',  respJson: { message: 'This came from the mock server' } }
    ]
    const store = mockStore({}, expectedActions, done)
    store.dispatch(homeActions.fetchApiServerInfo())
  })

  after(() => {
    superagentMock.unset()
  })
})
