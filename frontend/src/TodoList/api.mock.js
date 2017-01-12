import url from 'url'
import _ from 'lodash'
import axios from 'axios'
import adapter from 'axios-mock-adapter'

export default () => {
  const mock = new adapter(axios)

  let startId = 1

  let items = [
    { id: `${startId++}`, name: 'one' },
    { id: `${startId++}`, name: 'two' },
    { id: `${startId++}`, name: 'three' },
  ]

  mock.onGet(/.*\/items/).reply(200, items)

  mock.onPost(/.*\/items/).reply(({data}) => {
    const item = { id: `${startId++}`, name: JSON.parse(data).name }
    items = [...items, item]
    return [200, item]
  })

  mock.onDelete(/.*\/items\/.*/).reply((config) => {
    const id = _.last(url.parse(config.url).pathname.split('/'))
    items = items.filter((i) => i.id !== id)
    return [200, {id}]
  })

  mock.onPut(/.*\/items\/.*/).reply((config) => {
    const id = _.last(url.parse(config.url).pathname.split('/'))
    const item = items.find((i) => i.id === id)
    const updated = {...item, ...JSON.parse(config.data)}
    return [200, updated]
  })
}