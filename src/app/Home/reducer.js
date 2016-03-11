import ajaxAgent from '../../utility/ajaxAgent'

// action type constant
const request_api_server_info = 'request_api_server_info'
const receive_api_server_info = 'receive_api_server_info'
const request_greeting = 'request_greeting'
const receive_greeting = 'receive_greeting'
const request_tell_info = 'request_tell_info'
const receive_tell_info = 'receive_tell_info'

const initialState = {
  count: 0
}

const fetchApiServerInfo = () => (dispatch, getState) => {
  dispatch({
    type: request_api_server_info
  })

  return ajaxAgent('get', 'http://localhost:7070/api/loadInfo').then(
    respJson => {
      dispatch({
        type: receive_api_server_info,
        respJson
      })
    }
  )
}

const tellInfo = (location) => (dispatch, getState) => {
  let url = 'http://localhost:7070/api/tellInfo'

  dispatch({
    type: request_tell_info,
    location
  })
  if (location) {
    url = url + '?location=' + location
  }
  return ajaxAgent('get', url).then(
    respJson => {
      dispatch({
        type: receive_tell_info,
        respJson
      })
    }
  )
}

const greet = (userName) => (dispatch, getState) => {
  dispatch({
    type: request_greeting,
    userName
  })

  return ajaxAgent('post', 'http://localhost:7070/api/greet', {
    data: {
      userName
    },
    errorHandler: error => {
      console.log('error handled by errorHandler of homeActionCreator.greet: ', error)
    }
  }).then(
    respJson => {
      dispatch({
        type: receive_greeting,
        respJson
      })
    }
  )
}

export const homeActions = {
  fetchApiServerInfo,
  tellInfo,
  greet
}

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case request_api_server_info:
    case receive_api_server_info:
    case request_tell_info:
    case receive_tell_info:
    default: return state
  }
}