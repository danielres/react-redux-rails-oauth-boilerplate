import axios from 'axios'
import config from '../config.js'

export const fetchItems = () =>
    axios
      .get(`${config.API_ENDPOINT}/items`)
      .then(({data}) => data)

export const createItem = (params) =>
    axios
      .post(`${config.API_ENDPOINT}/items`, params)
      .then(({data}) => data)

export const destroyItem = (id) =>
    axios
      .delete(`${config.API_ENDPOINT}/items/${id}`)
      .then(({data}) => data)

export const updateItem = (id, params) =>
    axios
      .put(`${config.API_ENDPOINT}/items/${id}`, params)
      .then(({data}) => data)
