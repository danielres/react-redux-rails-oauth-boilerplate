export const types = {
  LOGIN_REQUEST:    'fbAuth/login/request',
  LOGIN_SUCCESS:    'fbAuth/login/success',
  LOGOUT_REQUEST:   'fbAuth/logout/request',
  LOGOUT_SUCCESS:   'fbAuth/logout/success',
}

export const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
})

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  user,
})

export const logoutUser = () => ({
  type: types.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
})

export const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
})
