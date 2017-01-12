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

const reduxWebtoolsBrowserExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield fork(TodoListSagas)
}

const rootReducer = combineReducers({
  TodoList,
  fbAuth,
})

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxWebtoolsBrowserExtension,
  )
)

store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())))

sagaMiddleware.run(rootSaga)

export default store
