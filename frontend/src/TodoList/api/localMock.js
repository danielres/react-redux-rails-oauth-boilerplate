import config from '../../config.js'

let startId = 1

let items = [
  {id: startId++, name: "one"},
  {id: startId++, name: "two"},
]

export const fetchItems = () =>
  items

export const createItem = (params) => {
  let newItem = {id: startId++, ...params}
  items = [...items, newItem]
  return newItem
}

export const destroyItem = (id) => {
  items = items.filter((i) => i.id !== id)
  return {id}
}

export const updateItem = (id, params) => {
  items = items.map((i) => i.id === id ? {...i, ...params} : i)
  let item = items.find((i) => i.id === id)
  return item
}
