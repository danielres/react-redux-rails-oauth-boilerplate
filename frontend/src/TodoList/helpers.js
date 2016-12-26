const makeArray = (e) =>
  e.constructor === Array ? e : [e]

export const omit = (obj, key) =>
  Object
    .keys(obj)
    .reduce((acc, v) => {
      return key === v ? acc : {...acc, [v]: obj[v]}
    }, {})

export const replace = (obj, key, newValue) =>
  Object
    .keys(obj)
    .reduce((acc, v) => {
      return key === v ? {...acc, [v]: newValue} : {...acc, [v]: obj[v]}
    }, {})

export const keyBy = (arr, k) =>
  makeArray(arr)
    .reduce((map, obj) => {
      map[obj[k]] = obj
      return map
    }, {})

export const unKey = (obj) =>
  Object.keys(obj).map(k => obj[k])
