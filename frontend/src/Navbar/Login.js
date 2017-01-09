import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {
  FormControl,
  Button,
} from 'react-bootstrap'

export default class Login extends Component {
  render() {
    const {
      errorMessage,
      loginUser,
    } = this.props

    const handleClick = () => {
      const creds = {
        username: ReactDOM.findDOMNode(this.refs.username),
        password: ReactDOM.findDOMNode(this.refs.password),
      }
      loginUser(creds)
    }

    return (
      <div>
        <FormControl
          type='text'
          ref='username'
          placeholder='Username'
        />
        {' '}
        <FormControl
          type='password'
          ref='password'
          placeholder='Password'
        />
        {' '}
        <Button
          bsStyle="primary"
          onClick={handleClick}
        >
          Login
        </Button>

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  }

}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}
