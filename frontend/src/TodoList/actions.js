export const types = {
  LIST_REQUEST:      'TodoList/list/request',
  LIST_SUCCESS:      'TodoList/list/success',
  LIST_FAILURE:      'TodoList/list/failure',
  NEW_UPDATE:        'TodoList/NewItem/update',
  CREATE_REQUEST:    'TodoList/Item/create/request',
  CREATE_SUCCESS:    'TodoList/Item/create/success',
  CREATE_FAILURE:    'TodoList/Item/create/failure',
  DESTROY_REQUEST:   'TodoList/Item/destroy/request',
  DESTROY_SUCCESS:   'TodoList/Item/destroy/success',
  DESTROY_FAILURE:   'TodoList/Item/destroy/failure',
  UPDATE_REQUEST:    'TodoList/Item/update/request',
  UPDATE_SUCCESS:    'TodoList/Item/update/success',
  UPDATE_FAILURE:    'TodoList/Item/update/failure',
}

export const fetchTodoListItems = () => (
  { type: types.LIST_REQUEST }
)

export const receiveItems = (data) => (
  { type: types.LIST_SUCCESS, data }
)

export const receiveItemsError = (error) => (
  { type: types.LIST_FAILURE, error }
)

export const updateNewItem = (values) => (
  { type: types.NEW_UPDATE, values }
)

export const createItem = (params) => (
  { type: types.CREATE_REQUEST, params }
)

export const createItemSuccess = (data) => (
  { type: types.CREATE_SUCCESS, data }
)

export const createItemError = (error) => (
  { type: types.CREATE_FAILURE, error }
)

export const destroyItem = (id) => (
  { type: types.DESTROY_REQUEST, id }
)

export const destroyItemSuccess = (data) => (
  { type: types.DESTROY_SUCCESS, data }
)

export const destroyItemError = (error) => (
  { type: types.DESTROY_FAILURE, error }
)

export const updateItem = (id, params) => (
  { type: types.UPDATE_REQUEST, id, params }
)

export const updateItemSuccess = (data) => (
  { type: types.UPDATE_SUCCESS, data }
)

export const updateItemError = (error) => (
  { type: types.UPDATE_FAILURE, error }
)
