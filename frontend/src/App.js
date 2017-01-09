import React, { Component } from 'react'
import TodoList from './TodoList/index'
import Navbar from './Navbar/index'
import FacebookLoginButton from './fbAuth/FacebookLoginButton/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div
          className="container"
          style={{textAlign: 'center'}}
        >
          <FacebookLoginButton />
        </div>
        <TodoList />
      </div>
    )
  }
}

export default App
