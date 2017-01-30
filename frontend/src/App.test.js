import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'

describe('when user is authenticated', () => {
  it('does not render a <FacebookLoginButton /> component', () => {
    const wrapper = shallow(<App isAuthenticated={true} />)
    expect(wrapper.find(FacebookLoginButton).length).toEqual(0)
  })
})

describe('when user is not authenticated', () => {
  it('renders a <FacebookLoginButton /> component', () => {
    const wrapper = shallow(<App isAuthenticated={false} />)
    expect(wrapper.find(FacebookLoginButton).length).toEqual(1)
  })
})
