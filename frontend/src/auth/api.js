import axios from 'axios'
import config from '../config.js'
import apiMock from './api.mock'

const { authApiUrl } = config

if (config.mockApis) {
  console.log('Api mock enabled for auth')
  apiMock()
}

export const requestAuth = ({ provider, oauthAccessToken }) =>
  axios
    .post(`${authApiUrl}/auth/${provider}`, { oauthAccessToken })
    .then(({ data }) => data)
