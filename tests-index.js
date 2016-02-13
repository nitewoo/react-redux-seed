import request from 'superagent-bluebird-promise'
import SuperagentMock from 'superagent-mock'

// require all modules ending in ".spec.js" from the
// './src' directory and all subdirectories
const contextSpec = require.context('./src', true, /\.spec\.js$/)
contextSpec.keys().forEach(contextSpec)


const contextMock = require.context('./src', true, /\.mock\.js$/)
let mockConfig = []
let superagentMock

// collect all mockup configs
contextMock.keys().forEach(req=>{
  mockConfig = mockConfig.concat(contextMock(req).default)
})

// setup mockup
superagentMock = SuperagentMock(request, mockConfig)

after(() => {
  // unset mockup after all tests done
  if (superagentMock) {
    superagentMock.unset()
  }
})
