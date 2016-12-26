import * as helpers from './helpers'

describe('omit', () => {
  it('returns an object omitting specified key', () => {
    const input    = {a: 'a', b: 'b', c: 'c'}
    const expected = {a: 'a', c: 'c'}
    expect(helpers.omit(input, 'b')).toEqual(expected)
  })

  it('supports empty objects', () => {
    const input    = {}
    const expected = {}
    expect(helpers.omit(input, 'b')).toEqual(expected)
  })

  it('supports objects with 1 element', () => {
    const input    = {a: 'a'}
    const expected = {}
    expect(helpers.omit(input, 'a')).toEqual(expected)
    expect(helpers.omit(input, 'x')).toEqual(input)
  })
})

describe('replace', () => {
  it('replaces an object value by key', () => {
    const input    = {a: 'a', b: 'b'}
    const expected = {a: 'a', b: 'BBB'}
    expect(helpers.replace(input, 'b', 'BBB')).toEqual(expected)
  })
})

describe('keyBy', () => {
  it('convert object array to hash map, indexed by an attribute value of the object', () => {
    const input    = [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
    ]
    const expected = {
      1: {id: 1, name: 'one'},
      2: {id: 2, name: 'two'},
    }
    expect(helpers.keyBy(input, 'id')).toEqual(expected)
  })
  it('supports empty input', () => {
    const input    = []
    const expected = {}
    expect(helpers.keyBy(input, 'id')).toEqual(expected)
  })
  it('supports undefined input', () => {
    const input    = undefined
    const expected = {}
    expect(helpers.keyBy(input, 'id')).toEqual(expected)
  })
})

describe('unKey', () => {
  it('convert indexed hash map back to object array', () => {
    const input = {
      1: {id: 1, name: 'one'},
      2: {id: 2, name: 'two'},
    }
    const expected = [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
    ]
    expect(helpers.unKey(input)).toEqual(expected)
  })
})
