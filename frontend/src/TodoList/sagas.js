import {
  put,
  call,
  takeLatest,
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

function * createItem(action) {
  try {
    const data = yield call(api.createItem, action.params)
    yield put({type: types.CREATE_SUCCESS, data})
  } catch (error) {
    yield put({type: types.CREATE_FAILURE, error})
  }
}

function * destroyItem(action) {
  try {
    const data = yield call(api.destroyItem, action.id)
    yield put({type: types.DESTROY_SUCCESS, data})
  } catch (error) {
    yield put({type: types.DESTROY_FAILURE, error})
  }
}

function * updateItem(action) {
  try {
    const data = yield call(api.updateItem, action.id, action.params)
    yield put({type: types.UPDATE_SUCCESS, data})
  } catch (error) {
    yield put({type: types.UPDATE_FAILURE, error})
  }
}

export default function* watcher() {
  yield takeLatest(types.LIST_REQUEST, fetchItems)
  yield takeLatest(types.CREATE_REQUEST, createItem)
  yield takeLatest(types.DESTROY_REQUEST, destroyItem)
  yield takeLatest(types.UPDATE_REQUEST, updateItem)
}
