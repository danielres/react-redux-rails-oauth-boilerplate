import React, { Component, PropTypes } from 'react'
import {
  Navbar,
  Button,
} from 'react-bootstrap'
import Login from './Login'

export default class _Navbar extends Component {
  render() {
    const {
      isAuthenticated,
      errorMessage,
      loginUser,
      logoutUser,
    } = this.props

    return (
      <Navbar>
        <div className='container-fluid'>
          <Navbar.Brand>Yo!</Navbar.Brand>

          <Navbar.Form>
            { isAuthenticated
              ? <Button
                  onClick={logoutUser}
                >
                  Logout
                </Button>
              : <Login
                  errorMessage={errorMessage}
                  loginUser={loginUser}
                />
            }
          </Navbar.Form>
        </div>
      </Navbar>
    )
  }
}

_Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}
