import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import TodoList from './TodoList/reducer'
import fbAuth from './fbAuth/reducer'
import TodoListSagas from './TodoList/sagas'

const redux_webtools_browser_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield fork(TodoListSagas)
}

const rootReducer = combineReducers({
  TodoList,
  fbAuth,
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
