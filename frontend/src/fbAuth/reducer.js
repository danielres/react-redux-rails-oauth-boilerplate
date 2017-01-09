import { types } from './actions'

const initialState = {
  isFetching: false,
  user: {},
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      }
    case types.LOGOUT_SUCCESS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
