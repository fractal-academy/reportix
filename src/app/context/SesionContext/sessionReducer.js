import SIGN_IN from './dispatchEventsType'

const sessionReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return action.payload
    }
    default:
      return state
  }
}

export default sessionReducer
