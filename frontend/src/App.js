import React, { Component } from 'react'
import {Navbar } from 'react-bootstrap'
import TopNavbar from './Navbar/'
import TodoList from './TodoList/'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'
import FacebookLogoutButton from './fbAuth/FacebookLogoutButton/'

import { connect } from 'react-redux'

export class App extends Component {
  render() {
    const {
      isAuthenticated,
      user
    } = this.props.fbAuth

    return (
      <div className="App">
        <TopNavbar>
          { isAuthenticated &&
            <Navbar.Form>
              <FacebookLogoutButton />
            </Navbar.Form>
          }
        </TopNavbar>
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
  fbAuth: state.fbAuth,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
