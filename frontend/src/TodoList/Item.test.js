import React from 'react'
import renderer from 'react-test-renderer'
import Item from './Item'

it('matches snapshot', () => {
  const item = {}
  const component = renderer.create(<Item item={item} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

