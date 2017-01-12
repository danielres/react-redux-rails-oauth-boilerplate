const makeArray = (e) => {
  if (e === undefined) return []
  return e.constructor === Array ? e : [e]
}

export const keyBy = (arr, k) =>
  makeArray(arr)
    .reduce((map, obj) => {
      map[obj[k]] = obj
      return map
    }, {})

export const unKey = (obj) =>
  Object.keys(obj).map(k => obj[k])
