import config from '../config.js'
import axios from 'axios'
import store from '../store'

export const LIST_REQUEST = 'TodoList/list/request'
export const LIST_SUCCESS = 'TodoList/list/success'
export const LIST_FAILURE = 'TodoList/list/failure'

export const NEW_UPDATE  = 'TodoList/NewItem/update'

export const CREATE_REQUEST = 'TodoList/Item/create/request'
export const CREATE_SUCCESS = 'TodoList/Item/create/success'
export const CREATE_FAILURE = 'TodoList/Item/create/failure'

export const DESTROY_REQUEST = 'TodoList/Item/destroy/request'
export const DESTROY_SUCCESS = 'TodoList/Item/destroy/success'
export const DESTROY_FAILURE = 'TodoList/Item/destroy/failure'

export const UPDATE_REQUEST = 'TodoList/Item/update/request'
export const UPDATE_SUCCESS = 'TodoList/Item/update/success'
export const UPDATE_FAILURE = 'TodoList/Item/update/failure'

export const fetchTodoListItems = () => {
  store.dispatch({type: LIST_REQUEST})
  axios.get(`${config.API_ENDPOINT}/items`)
    .then(({data}) => {
      store.dispatch({type: LIST_SUCCESS, data})
    })
    .catch((error) => {
      store.dispatch({type: LIST_FAILURE, error})
    })
}

export const updateNewItem = (values) => ({
  type: NEW_UPDATE,
  values,
})

export const createItem = (params) => {
  store.dispatch({type: CREATE_REQUEST, params})
  axios.post(`${config.API_ENDPOINT}/items`, params)
  .then(({data}) => {
    store.dispatch({type: CREATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_CREATE_FAILURE
  })
}

export const destroyItem = (id) => {
  store.dispatch({type: DESTROY_REQUEST, id})
  axios.delete(`${config.API_ENDPOINT}/items/${id}`)
  .then(({data}) => {
    store.dispatch({type: DESTROY_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_DESTROY_FAILURE
  })
}


export const updateItem = (id, params) => {
  store.dispatch({type: UPDATE_REQUEST, id, params})
  axios.put(`${config.API_ENDPOINT}/items/${id}`, params)
  .then(({data}) => {
    store.dispatch({type: UPDATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log({error})
    // add TODOLISTITEM_UPDATE_FAILURE
  })
}

