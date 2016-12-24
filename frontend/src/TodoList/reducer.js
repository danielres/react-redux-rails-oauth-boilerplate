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
    case actions.TODOLISTITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.TODOLISTITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case actions.TODOLISTITEMS_FAILURE:
      return state
    case actions.TODOLISTNEWTITEM_UPDATE:
      return {
        ...state,
        NewItem: action.values,
      }
    case actions.TODOLISTITEM_CREATE_SUCCESS:
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
    case actions.TODOLISTITEM_CREATE_FAILURE:
      return state
    case actions.TODOLISTITEM_DESTROY_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.data.id )
      }
    case actions.TODOLISTITEM_UPDATE_SUCCESS:
      return {
        ...state,
        data: state.data.map((item) => item.id === action.data.id ? action.data : item)
      }
    case actions.TODOLISTITEM_UPDATE_FAILURE:
      return state
    default:
      return state
  }
}

