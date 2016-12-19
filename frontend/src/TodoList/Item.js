import config from '../config.js'
import axios from 'axios'
import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {parent} = this.props
    const {item} = this.props
    const {state} = parent

    const toggleCompleted = (i) => {
      axios.put(`${config.API_ENDPOINT}/item/${i.id}`,
          {...item, completed: !item.completed}
        )
        .then((response) => {
          parent.setState({
            ...state,
            items: {
              ...state.items,
              data: state.items.data.map((i) =>
                i.id === response.data.id ? response.data : i
              )
            }
          })
        })
        .catch((error) => {
          console.log(error)
        })
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
