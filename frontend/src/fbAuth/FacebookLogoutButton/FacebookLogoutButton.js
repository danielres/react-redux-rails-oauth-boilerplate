import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const FacebookLogoutButton = (props) =>
  <Button
    onClick={props.logout}
  >
    Logout
  </Button>

FacebookLogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default FacebookLogoutButton
