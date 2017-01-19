import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import * as api from './api'
import {
  requestAuth,
  receiveAuth,
  receiveAuthError,
} from './actions'
import { types as fbAuthTypes } from '../fbAuth/actions'

function * _requestAuth (params) {
  try {
    yield put(requestAuth(params))
    const response = yield call(api.requestAuth, params)
    yield put(receiveAuth(response))
  } catch (error) {
    yield put(receiveAuthError(error))
  }
}

export default function* watcher () {
  yield takeLatest(fbAuthTypes.LOGIN_SUCCESS, (data) =>
    _requestAuth({ provider: 'facebook', oauthAccessToken: data.user.accessToken })
  )
}
