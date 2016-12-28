import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import TodoList from './TodoList/reducer'

const rootReducer = combineReducers({
  TodoList,
})

const redux_webtools_browser_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    redux_webtools_browser_extension,
  )
)
