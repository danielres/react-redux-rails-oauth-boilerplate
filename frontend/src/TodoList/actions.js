import config from '../config.js'
import axios from 'axios'

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

export const fetchTodoListItems = () => ({
  type: types.LIST_REQUEST,
})

export const updateNewItem = (values) => ({
  type: types.NEW_UPDATE,
  values,
})

export const createItem = (params) =>
  (dispatch) => {
    dispatch({type: types.CREATE_REQUEST, params})
    axios.post(`${config.API_ENDPOINT}/items`, params)
    .then(({data}) => {
      dispatch({type: types.CREATE_SUCCESS, data})
    })
    .catch((error) => {
      console.log(error)
      // add TODOLISTITEM_CREATE_FAILURE
    })
  }

export const destroyItem = (id) =>
  (dispatch) => {
    dispatch({type: types.DESTROY_REQUEST, id})
    axios.delete(`${config.API_ENDPOINT}/items/${id}`)
    .then(({data}) => {
      dispatch({type: types.DESTROY_SUCCESS, data})
    })
    .catch((error) => {
      console.log(error)
      // add TODOLISTITEM_DESTROY_FAILURE
    })
  }


export const updateItem = (id, params) =>
  (dispatch) => {
    dispatch({type: types.UPDATE_REQUEST, id, params})
    axios.put(`${config.API_ENDPOINT}/items/${id}`, params)
    .then(({data}) => {
      dispatch({type: types.UPDATE_SUCCESS, data})
    })
    .catch((error) => {
      console.log({error})
      // add TODOLISTITEM_UPDATE_FAILURE
    })
  }

