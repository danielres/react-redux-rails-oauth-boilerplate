import { types as actions }   from './actions'
import * as helpers from './helpers'

export const initialState = {
  loading: false,
  data: {},
  NewItem: {
    name: ""
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...helpers.keyBy(action.data, 'id'),
        },
      }
    case actions.LIST_FAILURE:
      return state
    case actions.NEW_UPDATE:
      return {
        ...state,
        NewItem: action.values,
      }
    case actions.CREATE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...helpers.keyBy(action.data, 'id'),
        },
        NewItem: {
          ...initialState.NewItem,
        }
      }
    case actions.CREATE_FAILURE:
      return state
    case actions.DESTROY_SUCCESS:
      return {
        ...state,
        data: helpers.omit(state.data, action.data.id)
      }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        data: helpers.replace(state.data, action.data.id, action.data)
      }
    case actions.UPDATE_FAILURE:
      return state
    default:
      return state
  }
}

