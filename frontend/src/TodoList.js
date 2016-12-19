import React, { Component } from 'react'
import './TodoList.css'
import Item from './TodoList/Item'
import NewItem from './TodoList/NewItem'

export default class extends Component {
  constructor () {
    super()

    this.state = {
      inputValue: "foo",
      items: [
        { id: 1, name: "one",   position: 1, completed: false },
        { id: 2, name: "two",   position: 2, completed: false },
        { id: 3, name: "three", position: 3, completed: false },
    ]}
  }

  render() {
    return (
      <div className="TodoList">
        <ul>
          {this.state.items.sort((a, b) => a.position - b.position).map((item) =>
            <Item
              item={item}
              key={item.id}
              parent={this}
            />
          )}
        </ul>
        <NewItem
          parent={this}
        />
      </div>
    )
  }
}
