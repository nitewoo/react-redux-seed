// action type constant
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

// action creater
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

const initialState = {
  count: 0
}

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      const { count } = state
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}