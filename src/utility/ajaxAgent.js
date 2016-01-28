import request from 'superagent-bluebird-promise'
import nocache from 'superagent-no-cache'

let defaultHeader = {
  Accept: 'application/json'
}

function agent(method, url, data, header = {}) {
  return request(method, url)
          .set(Object.assign(header, defaultHeader))
          .use(nocache)
          .send(data)
          .then(response => JSON.parse(response.text))
}

export default agent

function _isObject(obj) { return Object(obj) === obj }
