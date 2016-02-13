import 'babel-polyfill'
import { expect } from 'chai'
import home, { homeActions } from './reducer'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

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
})
