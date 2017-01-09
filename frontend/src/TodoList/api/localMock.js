import axios from 'axios'
import config from '../../config.js'

const apiUrl = config.apiUrls[config.apiTypes.TodoList]

export const fetchItems = () => [
  {id: 1, name: "one"},
  {id: 2, name: "two"},
]

export const createItem = (params) =>
  axios
    .post(`${apiUrl}/items`, params)
    .then(({data}) => data)

export const destroyItem = (id) =>
  axios
    .delete(`${apiUrl}/items/${id}`)
    .then(({data}) => data)

export const updateItem = (id, params) =>
  axios
    .put(`${apiUrl}/items/${id}`, params)
    .then(({data}) => data)
