import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import TopNavbar from './Navbar/'
import TodoList from './TodoList/'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'
import LogoutButton from './LogoutButton/'
import { connect } from 'react-redux'

export class App extends Component {
  render () {
    const {
      isAuthenticated,
      user,
    } = this.props.auth

    return (
      <div className="App">
        <TopNavbar>
          { isAuthenticated &&
            <Navbar.Form>
              <LogoutButton />
            </Navbar.Form>
          }
        </TopNavbar>
        { isAuthenticated
          ? <div>
              <div className="container text-center">
                Welcome, {user.profile.display_name} !
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
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
