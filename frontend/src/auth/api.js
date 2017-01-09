import axios from 'axios'
import config from '../config.js'

const useFakeApi = true

const fakeApi = {
  login(creds) {
    return {user: {id_token: 'xxxxxxxx'}}
  }
}

const realApi = {
  login(creds) {
    // FIXME:
    axios
      .post(`${config.API_ENDPOINT}/sessions/create`, creds)
      .then(({data}) => data)
  }
}

export default useFakeApi ? fakeApi : realApi
