import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import TodoList from './TodoList/reducer'
import auth from './auth/reducer'
import TodoListSagas from './TodoList/sagas'
import authSagas from './auth/sagas'

const redux_webtools_browser_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield fork(TodoListSagas)
  yield fork(authSagas)
}

const rootReducer = combineReducers({
  TodoList,
  auth,
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    redux_webtools_browser_extension,
  )
)

sagaMiddleware.run(rootSaga)

export default store
