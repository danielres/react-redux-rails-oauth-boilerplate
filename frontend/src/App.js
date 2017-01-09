import React, { Component } from 'react'
import TodoList from './TodoList/index'
import Navbar from './Navbar/index'
import FacebookLogin from './FacebookLogin/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div
          className="container"
          style={{textAlign: 'center'}}
        >
          <FacebookLogin />
        </div>
        <TodoList />
      </div>
    )
  }
}

export default App
