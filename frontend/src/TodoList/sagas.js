import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import * as api from './api'
import {
  types,
  receiveItems,
  receiveItemsError,
  createItemSuccess,
  createItemError,
  destroyItemSuccess,
  destroyItemError,
  updateItemSuccess,
  updateItemError,
} from './actions'

function * fetchItems () {
  try {
    const data = yield call(api.fetchItems)
    yield put(receiveItems(data))
  } catch (error) {
    yield put(receiveItemsError(error))
  }
}

function * createItem (action) {
  try {
    const data = yield call(api.createItem, action.params)
    yield put(createItemSuccess(data))
  } catch (error) {
    yield put(createItemError(error))
  }
}

function * destroyItem (action) {
  try {
    const data = yield call(api.destroyItem, action.id)
    yield put(destroyItemSuccess(data))
  } catch (error) {
    yield put(destroyItemError(error))
  }
}

function * updateItem (action) {
  try {
    const data = yield call(api.updateItem, action.id, action.params)
    yield put(updateItemSuccess(data))
  } catch (error) {
    yield put(updateItemError(error))
  }
}

export default function* watcher () {
  yield takeLatest(types.LIST_REQUEST, fetchItems)
  yield takeLatest(types.CREATE_REQUEST, createItem)
  yield takeLatest(types.DESTROY_REQUEST, destroyItem)
  yield takeLatest(types.UPDATE_REQUEST, updateItem)
}
