import { flow, set, merge, unset, keyBy } from 'lodash/fp'
import { types } from './actions'
import * as h from './helpers'

export const initialState = {
  loading: false,
  data: {},
  NewItem: {
    name: '',
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_REQUEST:
      return set('loading', true)(state)
    case types.LIST_SUCCESS:
      return flow(
        set('loading', false),
        set('data', keyBy('id', action.data)),
      )(state)
    case types.NEW_UPDATE:
      return set('NewItem', action.values)(state)
    case types.CREATE_SUCCESS:
      return flow(
        set('NewItem', initialState.NewItem),
        merge({ data: h.keyBy(action.data, 'id') }),
      )(state)
    case types.DESTROY_SUCCESS:
      return unset(`data.${action.data.id}`)(state)
    case types.UPDATE_SUCCESS:
      return set(`data.${action.data.id}`, action.data)(state)
    default:
      return state
  }
}
