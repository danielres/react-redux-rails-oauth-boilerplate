import React, { Component } from 'react'
import TodoList from './TodoList/index'
import Navbar from './Navbar/index'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'

import { connect } from 'react-redux'

export class App extends Component {
  render() {
    const {
      isAuthenticated,
      user
    } = this.props.fbAuth

    return (
      <div className="App">
        <Navbar />
        { isAuthenticated
          ? <div>
              <div className="container text-center">
                Welcome, {user.name} !
              </div>
              <TodoList />
            </div>
          : <div className="container text-center">
              <FacebookLoginButton />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  fbAuth: state.fbAuth,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
