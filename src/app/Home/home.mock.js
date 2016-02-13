export default [{
  pattern: 'http://localhost:7070/api/loadInfo',
  fixtures: function (match, params, headers) {
    return { message: 'This came from the mock server' }
  },
  callback: function (match, data) {
    return { text : JSON.stringify(data) }
  }
}]