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

// try diff output
// describe('nice output', function(){
//   it('should fail this test with a nice output when objects are not equal', function(){
//     var objectA = {
//       a: 'some string',
//       b: 9,
//       c: 20,
//       d: 100,
//     },
//     objectB = {
//       a: 'some other string',
//       b: 10,
//       g: '100',
//     };

//     expect(objectA).to.eql(objectB);
//   });
//   it('should fail this test with a nice output when arrays are not equal', function(){
//     var arrayA = ['a', 6, 10, 9, 20, '15', 20, 30, 45, 60],
//       arrayB = ['c', 2, '8', '15', 8, 30, '8', 5, 10, 'a', 8, '60'];

//     expect(arrayA).to.eql(arrayB);
//   });
// })