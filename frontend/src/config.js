import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()

const config = {
  apiUrl: env.REACT_APP_API_URL,
  apiMock: env.REACT_APP_API_MOCK,
  facebookAppId: env.REACT_APP_FACEBOOK_APP_ID,
  facebookFields: env.REACT_APP_FACEBOOK_FIELDS,
  facebookScope: env.REACT_APP_FACEBOOK_SCOPE,
}

export default config
