import * as actions from './actions'

export const initialState = {
  loading: false,
  data: [],
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
        data: action.data,
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
        data: [
          ...state.data,
          action.data,
        ],
        NewItem: {
          ...initialState.NewItem,
        }
      }
    case actions.CREATE_FAILURE:
      return state
    case actions.DESTROY_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.data.id )
      }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        data: state.data.map((item) => item.id === action.data.id ? action.data : item)
      }
    case actions.UPDATE_FAILURE:
      return state
    default:
      return state
  }
}

