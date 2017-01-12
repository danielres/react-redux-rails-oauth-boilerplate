import { types as actions } from './actions'
import reducer, { initialState } from './reducer'

describe('reducer', function () {
  it('should return the initial state', function () {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})

describe(actions.LIST_REQUEST, () => {
  it('sets "loading" to true', () => {
    const action = { type: actions.LIST_REQUEST }
    const expected = true
    expect(reducer({}, action).loading).toEqual(expected)
  })
})

describe(actions.LIST_SUCCESS, () => {
  it('sets "loading" to false', () => {
    const prevState = {}
    const action = {
      type: actions.LIST_SUCCESS,
    }
    const expected = false
    expect(reducer(prevState, action).loading).toEqual(expected)
  })
  it('adds received keyed elements to state', () => {
    const prevState = {}
    const action = {
      type: actions.LIST_SUCCESS,
      data: [
        { id: '1', name: 'one' },
      ],
    }
    const expected = {
      1: { id: '1', name: 'one' },
    }
    expect(reducer(prevState, action).data).toEqual(expected)
  })
})

describe(actions.NEW_UPDATE, () => {
  it('updates NewItem state', () => {
    const prevState = {}
    const action = {
      type: actions.NEW_UPDATE,
      values: { name: 'foo' },
    }
    const expected = { NewItem: { name: 'foo' }}
    expect(reducer(prevState, action)).toEqual(expected)
  })
})

describe(actions.CREATE_SUCCESS, () => {
  it('adds created keyed element to state', () => {
    const prevState = {
      data: {
        1: { id: '1', name: 'one' },
      },
    }
    const action = {
      type: actions.CREATE_SUCCESS,
      data: { id: '2', name: 'two' },
    }
    const expected = {
      1: { id: '1', name: 'one' },
      2: { id: '2', name: 'two' },
    }
    expect(reducer(prevState, action).data).toEqual(expected)
  })
  it('resets state for new item', () => {
    const prevState = { NewItem: { name: 'foo' }}
    const action = {
      type: actions.CREATE_SUCCESS,
    }
    const expected = { name: '' }
    expect(reducer(prevState, action).NewItem).toEqual(expected)
  })
})

describe(actions.DESTROY_SUCCESS, () => {
  it('remove element from state', () => {
    const prevState = {
      data: {
        1: { id: '1', name: 'one' },
        2: { id: '2', name: 'two' },
      },
    }
    const action = {
      type: actions.DESTROY_SUCCESS,
      data: { id: '1', name: 'one' },
    }
    const expected = {
      data: {
        2: { id: '2', name: 'two' },
      },
    }
    expect(reducer(prevState, action)).toEqual(expected)
  })
})

describe(actions.UPDATE_SUCCESS, () => {
  it('updates element', () => {
    const prevState = {
      data: {
        1: { id: '1', name: 'one' },
        2: { id: '2', name: 'twooo' },
      },
    }
    const action = {
      type: actions.UPDATE_SUCCESS,
      data: { id: '2', name: 'two' },
    }
    const expected = {
      data: {
        1: { id: '1', name: 'one' },
        2: { id: '2', name: 'two' },
      },
    }
    expect(reducer(prevState, action)).toEqual(expected)
  })
})
