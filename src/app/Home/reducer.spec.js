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

  // it('should handle fetchMenu', (done) => {
  //   const expectedActions = [
  //     { type: 'REQUEST_MENU' },
  //     { type: 'RECEIVE_MENU',  list: {} }
  //   ]
  //   const store = mockStore({}, expectedActions, done)
  //   store.dispatch(menuActions.fetchMenu())
  // })
})