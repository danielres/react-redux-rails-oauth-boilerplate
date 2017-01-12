import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'

const fetchTodoListItems = () => {}
const data = [{ id: 1, name: 'one' }]
const NewItem = { name: 'hello world' }
const props = { fetchTodoListItems, data, NewItem }
const component = renderer.create(<TodoList {...props} />)
const tree = component.toJSON()

it('matches snapshot', () => {
  expect(tree).toMatchSnapshot()
})
