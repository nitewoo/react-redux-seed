import appConst from 'constant'

export function apiUrl(path) {
  return appConst.API_CONTEXT + '/' + path
}