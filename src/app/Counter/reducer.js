// action type constant
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const initialState = {
  count: 0
}

export const counterActions = {
  increment: increment,
  decrement: decrement
}

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1
      }
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

// action creater
function increment(code) {
  console.log(code)
  return {
    type: INCREMENT_COUNTER
  }
}

function decrement(code) {
  console.log(code)
  return {
    type: DECREMENT_COUNTER
  }
}