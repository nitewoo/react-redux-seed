import appConst from 'constant'

export const apiUrl = (path) => {
  return appConst.API_CONTEXT + '/' + path
}

export const parseUrlParams = (url) => {
  const urlParts = url.split('?')
  const urlParams = urlParts[1] ? urlParts[1].split('&') : []
  let params = {}
  if (urlParams.length) {
    let param
    for (let i = urlParams.length - 1; i >= 0; i--) {
      param = urlParams[i].split('=')
      if (param[0]) {
        params[param[0]] = param[1]
      }
    }
  }
  return params
}
