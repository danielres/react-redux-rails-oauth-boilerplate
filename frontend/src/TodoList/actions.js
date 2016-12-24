import config from '../config.js'
import axios from 'axios'
import store from '../store'

export const TODOLISTITEMS_REQUEST = 'TODOLISTITEMS_REQUEST'
export const TODOLISTITEMS_SUCCESS = 'TODOLISTITEMS_SUCCESS'
export const TODOLISTITEMS_FAILURE = 'TODOLISTITEMS_FAILURE'

export const TODOLISTNEWTITEM_UPDATE  = 'TODOLISTNEWTITEM_UPDATE'

export const TODOLISTITEM_CREATE_REQUEST = 'TODOLISTITEM_CREATE_REQUEST'
export const TODOLISTITEM_CREATE_SUCCESS = 'TODOLISTITEM_CREATE_SUCCESS'
export const TODOLISTITEM_CREATE_FAILURE = 'TODOLISTITEM_CREATE_FAILURE'

export const TODOLISTITEM_DESTROY_REQUEST = 'TODOLISTITEM_DESTROY_REQUEST'
export const TODOLISTITEM_DESTROY_SUCCESS = 'TODOLISTITEM_DESTROY_SUCCESS'
export const TODOLISTITEM_DESTROY_FAILURE = 'TODOLISTITEM_DESTROY_FAILURE'

export const TODOLISTITEM_UPDATE_REQUEST = 'TODOLISTITEM_UPDATE_REQUEST'
export const TODOLISTITEM_UPDATE_SUCCESS = 'TODOLISTITEM_UPDATE_SUCCESS'
export const TODOLISTITEM_UPDATE_FAILURE = 'TODOLISTITEM_UPDATE_FAILURE'

export const fetchTodoListItems = () => {
  store.dispatch({type: TODOLISTITEMS_REQUEST})
  axios.get(`${config.API_ENDPOINT}/items`)
    .then(({data}) => {
      store.dispatch({type: TODOLISTITEMS_SUCCESS, data})
    })
    .catch((error) => {
      store.dispatch({type: TODOLISTITEMS_FAILURE, error})
    })
}

export const updateNewItem = (values) => ({
  type: TODOLISTNEWTITEM_UPDATE,
  values,
})

export const createItem = (params) => {
  store.dispatch({type: TODOLISTITEM_CREATE_REQUEST, params})
  axios.post(`${config.API_ENDPOINT}/items`, params)
  .then(({data}) => {
    store.dispatch({type: TODOLISTITEM_CREATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_CREATE_FAILURE
  })
}

export const destroyItem = (id) => {
  store.dispatch({type: TODOLISTITEM_DESTROY_REQUEST, id})
  axios.delete(`${config.API_ENDPOINT}/items/${id}`)
  .then(({data}) => {
    store.dispatch({type: TODOLISTITEM_DESTROY_SUCCESS, data})
  })
  .catch((error) => {
    console.log(error)
    // add TODOLISTITEM_DESTROY_FAILURE
  })
}


export const updateItem = (id, params) => {
  store.dispatch({type: TODOLISTITEM_UPDATE_REQUEST, id, params})
  axios.put(`${config.API_ENDPOINT}/items/${id}`, params)
  .then(({data}) => {
    store.dispatch({type: TODOLISTITEM_UPDATE_SUCCESS, data})
  })
  .catch((error) => {
    console.log({error})
    // add TODOLISTITEM_UPDATE_FAILURE
  })
}

