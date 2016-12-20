import React, { Component } from 'react'
import { toggleCompleted } from './actions'
import { destroyItem } from './actions'

export default class extends Component {
  render() {
    const {parent} = this.props
    const {item} = this.props

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
          onClick={() => destroyItem(parent, item)}
        >
          X
        </button>

        <button
          className="TodoList-Item-ToggleCompletedButton"
          onClick={() => toggleCompleted(parent, item)}
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
