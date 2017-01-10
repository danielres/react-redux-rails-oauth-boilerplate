import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import TodoList from './TodoList/'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'

describe('when user is authenticated', () => {
  it('renders a <TodoList /> component', () => {
    const wrapper = shallow(<App fbAuth={{isAuthenticated: true, user: {name: "Tom"}}} />)
    expect(wrapper.find(TodoList).length).toEqual(1)
  })
})

describe('when user is not', () => {
  it('renders a <FacebookLoginButton /> component', () => {
    const wrapper = shallow(<App fbAuth={{isAuthenticated: false}} />)
    expect(wrapper.find(FacebookLoginButton).length).toEqual(1)
  })
})
