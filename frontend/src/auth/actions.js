export const types = {
  AUTH_REQUEST:      'auth/login/request',
  AUTH_SUCCESS:      'auth/login/success',
  AUTH_FAILURE:      'auth/login/failure',
}

export const requestAuth = (params) => (
  { type: types.AUTH_REQUEST, params }
)

export const receiveAuth = (user) => (
  { type: types.AUTH_SUCCESS, user }
)

export const receiveAuthError = (error) => (
  { type: types.AUTH_FAILURE, error }
)
