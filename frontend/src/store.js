import { createStore } from 'redux'
import { combineReducers } from 'redux'
import TodoList from './TodoList/reducer'


const rootReducer = combineReducers({
  TodoList,
})

const redux_webtools_browser_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
  rootReducer,
  redux_webtools_browser_extension
)
