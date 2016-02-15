import { mockConfig } from 'utility/test' // (pattern, fixtures [, callback]) => ({ pattern, fixtures, callback })
import { parseUrlParams } from 'utility/url'

const loadInfoData = { message: 'This came from the mock server' }
const defaultCallback = (match, data) => {
  return { text: JSON.stringify(data) }
}

export default [
  mockConfig({
    pattern: 'http://localhost:7070/api/loadInfo',
    fixtures: () => loadInfoData
  }),
  mockConfig({
    pattern: 'http://localhost:7070/api/tellInfo((\\?)(.*))?',
    fixtures: (match, params, headers) => {
      const urlParams = parseUrlParams(match[0])
      return { message: 'Your current location is ' + urlParams.location }
    }
  }),
  mockConfig({
    pattern: 'http://localhost:7070/api/greet',
    fixtures: (match, params, headers) => {
      return { message: 'Hello ' + (params.userName || 'stranger') }
    }
  })
]
