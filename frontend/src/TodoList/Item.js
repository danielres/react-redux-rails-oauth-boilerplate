import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {item} = this.props
    const {destroyItem} = this.props
    const {updateItem} = this.props

    const toggleCompleted = () =>
      updateItem(item.id, {completed: !item.completed})

    const className = (i) => {
      var c = []
      c.push("TodoList-Item")
      if (i.completed) c.push("TodoList-Item--completed")
      return c.join(" ")
    }

    return (
      <li
        className={className(item)}
      >
        <button
          className="TodoList-Item-DestroyButton"
          onClick={() => destroyItem(item.id)}
        >
          X
        </button>

        <button
          className="TodoList-Item-ToggleCompletedButton"
          onClick={toggleCompleted}
        >
          V
        </button>

        <div>
          {item.name}
        </div>
      </li>
    )
  }
}
