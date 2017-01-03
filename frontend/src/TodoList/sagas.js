import { takeLatest, delay } from 'redux-saga'
import {
  put,
  call,
  fork,
} from 'redux-saga/effects'
import axios from 'axios'
import config from '../config.js'
import { types } from './actions'

const Api = {
  fetchTodoListItems: () =>
    axios.get(`${config.API_ENDPOINT}/items`).then(({data}) => data)
}

function * fetchTodoListItems(action) {
  try {
    const data = yield call(Api.fetchTodoListItems)
    yield put({type: types.LIST_SUCCESS, data})
  } catch (error) {
    yield put({type: types.LIST_FAILURE, error})
  }
}

export default function* watcher() {
  yield takeLatest(types.LIST_REQUEST, fetchTodoListItems)
}
