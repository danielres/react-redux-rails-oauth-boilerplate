import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import App from './App'
import Welcome from './Welcome'
import TodoList from './TodoList'

const history = syncHistoryWithStore(browserHistory, store)

export default () =>
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='todo' component={TodoList}/>
    </Route>
  </Router>
