import ajaxAgent from '../../utility/ajaxAgent'

// action type constant
const request_api_server_info = 'request_api_server_info'
const receive_api_server_info = 'receive_api_server_info'

const initialState = {
  count: 0
}

const fetchApiServerInfo = () => (dispatch, getState) => {
  dispatch({
    type: request_api_server_info
  })

  return ajaxAgent('get', 'http://localhost:7070/api/loadInfo')
    .then(
      respJson => {
        console.log(respJson)
        dispatch({
          type: receive_api_server_info,
          respJson
        })
      }
    )
}

export const homeActions = {
  fetchApiServerInfo: fetchApiServerInfo
}

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case request_api_server_info:
    case receive_api_server_info:
    default: return state
  }
}