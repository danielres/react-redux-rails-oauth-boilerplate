import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import TodoList from './TodoList/'

describe('<App />', () => {
  it('renders a <TodoList /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(TodoList).length).toEqual(1)
  })
})
