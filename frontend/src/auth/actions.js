export const types = {
  LOGIN_REQUEST:    'auth/login/request',
  LOGIN_SUCCESS:    'auth/login/success',
  LOGIN_FAILURE:    'auth/login/failure',
  LOGOUT_REQUEST:   'auth/logout/request',
  LOGOUT_SUCCESS:   'auth/logout/success',
  LOGOUT_FAILURE:   'auth/logout/failure',
}

export const loginUser = (creds) => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
})

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
})

export const loginError = (message) => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
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


