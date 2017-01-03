import axios from 'axios'
import config from '../config.js'

export const fetchItems = () =>
    axios
      .get(`${config.API_ENDPOINT}/items`)
      .then(({data}) => data)
