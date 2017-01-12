import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()

const config = {
  apiUrl: env.REACT_APP_API_URL,
  apiMock: env.REACT_APP_API_MOCK,
  facebookAppId: '228930450892810',
}

export default config
