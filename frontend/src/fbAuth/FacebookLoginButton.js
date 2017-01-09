import React from 'react'
import FacebookLogin from 'react-facebook-login'
import config from '../config'

export default () =>
  <FacebookLogin
    appId={config.facebookAppId}
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>{console.log("FB login requested")}}
    callback={(resp) => console.log(resp)}
    icon="fa-facebook"
  />
