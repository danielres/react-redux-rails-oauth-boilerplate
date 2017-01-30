import React from 'react'
import TopNavbar from './Navbar/'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'
import { connect } from 'react-redux'

export const App = (props) =>
  <div className="App">
    <TopNavbar
      isAuthenticated={props.isAuthenticated}
    />
    { props.isAuthenticated
      ? props.children
      : <div className="container text-center">
          <FacebookLoginButton />
        </div>
    }
  </div>

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
