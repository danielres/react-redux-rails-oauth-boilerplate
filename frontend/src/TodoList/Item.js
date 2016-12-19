import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {parent} = this.props
    const {item} = this.props

    const toggleCompleted = (i) => {
      const items = parent.state.items.data.map((item) => {
        if (item.id === i.id){ item.completed = !item.completed }
        return item
      })
      parent.setState({...parent.state, items: {...parent.state.items, data: items}})
    }

    const className = (i) => {
      var c = []
      c.push("TodoList-Item")
      if (i.completed) c.push("TodoList-Item--completed")
      return c.join(" ")
    }

    return (
      <li
        className={className(item)}
        onClick={() => toggleCompleted(item)}
      >
        {item.name}
      </li>
    )
  }
}
