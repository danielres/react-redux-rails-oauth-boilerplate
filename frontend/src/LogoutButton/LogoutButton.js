import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const LogoutButton = (props) =>
  <Button
    onClick={props.logout}
  >
    Logout
  </Button>

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default LogoutButton
