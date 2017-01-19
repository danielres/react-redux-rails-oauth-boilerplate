import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import config from './config.js'

export default config.mockApis
  ? new Adapter(axios)
  : () => {}
