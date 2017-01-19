import axios from 'axios'
import config from '../config.js'
import apiMock from './api.mock'

const { apiUrl } = config

if (config.mockApis) {
  console.log('Api mock enabled for TodoList')
  apiMock()
}

export const fetchItems = () =>
  axios
    .get(`${apiUrl}/items`)
    .then(({ data }) => data)

export const createItem = (params) =>
  axios
    .post(`${apiUrl}/items`, params)
    .then(({ data }) => data)

export const destroyItem = (id) =>
  axios
    .delete(`${apiUrl}/items/${id}`)
    .then(({ data }) => data)

export const updateItem = (id, params) =>
  axios
    .put(`${apiUrl}/items/${id}`, params)
    .then(({ data }) => data)
