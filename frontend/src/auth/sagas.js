import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import api from './api/'
import {
  types,
  receiveLogin,
  loginError,
  receiveLogout,
  logoutError,
} from './actions'

function * loginUser(action) {
  try {
    const user = yield call(api.login, action.creds)
    localStorage.setItem('id_token', user.id_token)
    yield put(receiveLogin(user))
  } catch (error) {
    yield put(loginError(error))
  }
}

function * logoutUser() {
  try {
    yield put(logoutUser())
    localStorage.removeItem('id_token')
    yield put(receiveLogout())
  } catch (error) {
    yield put(logoutError(error))
  }
}

export default function* watcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginUser)
  yield takeLatest(types.LOGOUT_REQUEST, logoutUser)
}
