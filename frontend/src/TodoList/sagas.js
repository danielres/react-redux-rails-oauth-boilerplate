import { takeLatest, delay } from 'redux-saga'
import {
  put,
  call,
  fork,
} from 'redux-saga/effects'
import * as api from './api'
import { types } from './actions'

function * fetchItems() {
  try {
    const data = yield call(api.fetchItems)
    yield put({type: types.LIST_SUCCESS, data})
  } catch (error) {
    yield put({type: types.LIST_FAILURE, error})
  }
}

export default function* watcher() {
  yield takeLatest(types.LIST_REQUEST, fetchItems)
}
