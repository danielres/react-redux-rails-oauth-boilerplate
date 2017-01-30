import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextRouter = require('./Router').default
    ReactDOM.render(
      <Provider store={store}>
        <NextRouter />
      </Provider>,
      rootEl
    )
  })
}
