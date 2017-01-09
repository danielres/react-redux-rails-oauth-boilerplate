import React, { Component } from 'react'
import TodoList from './TodoList/index'
import Navbar from './Navbar/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TodoList />
      </div>
    )
  }
}

export default App
