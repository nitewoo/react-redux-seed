// ----- reducer -----
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}

export const global =  {
  title: 'React-Redux-Seed',
  home: '主页',
  about: 'About'

}

const initialState = {
  global
}