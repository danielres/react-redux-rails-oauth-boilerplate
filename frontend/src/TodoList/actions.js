import config from '../config.js'
import axios from 'axios'
import store from '../store'

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

export const fetchTodoListItems = () => {
  store.dispatch({type: types.LIST_REQUEST})
  axios.get(`${config.API_ENDPOINT}/items`)
    .then(({data}) => {
      store.dispatch({type: types.LIST_SUCCESS, data})
    })
    .catch((error) => {
      store.dispatch({type: types.LIST_FAILURE, error})
    })
}

export const updateNewItem = (values) => ({
  type: types.NEW_UPDATE,
  values,
})

export const createItem = (params) => {
  store.dispatch({type: types.CREATE_REQUEST, params})
  axios.post(`${config.API_ENDPOINT}/items`, params)
  .then(({data}) => {
    store.dispatch({type: types.CREATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_CREATE_FAILURE
  })
}

export const destroyItem = (id) => {
  store.dispatch({type: types.DESTROY_REQUEST, id})
  axios.delete(`${config.API_ENDPOINT}/items/${id}`)
  .then(({data}) => {
    store.dispatch({type: types.DESTROY_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_DESTROY_FAILURE
  })
}


export const updateItem = (id, params) => {
  store.dispatch({type: types.UPDATE_REQUEST, id, params})
  axios.put(`${config.API_ENDPOINT}/items/${id}`, params)
  .then(({data}) => {
    store.dispatch({type: types.UPDATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log({error})
    // add TODOLISTITEM_UPDATE_FAILURE
  })
}
