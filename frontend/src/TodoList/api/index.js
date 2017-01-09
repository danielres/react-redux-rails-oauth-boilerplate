import config from '../../config.js'
import * as remoteMock from './remoteMock'
import * as localMock from './localMock'

const api = {
  remoteMock,
  localMock,
}[config.apiTypes.TodoList]


export default api
