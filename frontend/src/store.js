import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux'
import { fork } from 'redux-saga/effects'
import TodoList from './TodoList/reducer'
import fbAuth from './fbAuth/reducer'
import auth from './auth/reducer'
import TodoListSagas from './TodoList/sagas'
import authSagas from './auth/sagas'
import { types as logoutTypes } from './Navbar/LogoutButton/actions'

const reduxWebtoolsBrowserExtension = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() ||
  ((s) => s)

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield fork(TodoListSagas)
  yield fork(authSagas)
}

const appReducer = combineReducers({
  TodoList,
  fbAuth,
  auth,
  routing: routerReducer,
})

const rootReducer = (state, action) => {
  if (action.type === logoutTypes.LOGOUT) state = undefined
  return appReducer(state, action)
}

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
