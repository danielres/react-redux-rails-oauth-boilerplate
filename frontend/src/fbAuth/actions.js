export const types = {
  LOGIN_REQUEST:    'fbAuth/login/request',
  LOGIN_SUCCESS:    'fbAuth/login/success',
  LOGOUT:           'fbAuth/logout',
}

export const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
})

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
})

export const logout = () => ({
  type: types.LOGOUT,
})
