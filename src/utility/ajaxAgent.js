import request from 'superagent-bluebird-promise'
import nocache from 'superagent-no-cache'

let defaultHeader = {
  Accept: 'application/json'
}

// function agent(method, url, data, header = {}) {
function agent(method, url, options = {}) {
  const { data, header } = options

  const errorHandler = options.errorHandler || (error => {
    console.log('error handled by errorHandler of ajaxAgent: ', error)
  })

  return request(method, url)
          .set(Object.assign(defaultHeader, header))
          .use(nocache)
          .send(data)
          .then(response => JSON.parse(response.text), errorHandler)
}

export default agent

function _isObject(obj) { return Object(obj) === obj }
