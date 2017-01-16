import React, { PropTypes } from 'react'
import FacebookLogin from 'react-facebook-login'
import config from '../../config'

const FacebookLoginButton = (props) =>
  <FacebookLogin
    appId={config.facebookAppId}
    autoLoad={false}
    fields={config.facebookFields}
    scope={config.facebookScope}
    onClick={props.requestLogin}
    callback={props.receiveLogin}
    icon="fa-facebook"
  />

FacebookLoginButton.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  receiveLogin: PropTypes.func.isRequired,
}

export default FacebookLoginButton
