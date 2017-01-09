import config from '../../config.js'
import * as localMock from './localMock'
import * as localReal from './localReal'

export default {
  localMock,
  localReal,
}[config.apiTypes.auth]


