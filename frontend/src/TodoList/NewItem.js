import React, { Component } from 'react'

export default class extends Component {
  render () {
    const {
      NewItem,
      updateNewItem,
      createItem,
    } = this.props

    const value = NewItem.name

    const onChange = (e) => {
      updateNewItem({ name: e.target.value })
    }

    const onClick = (e) => {
      e.preventDefault()
      createItem(NewItem)
    }

    return (
      <form>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
        <button
          onClick={onClick}
        >
          ok
        </button>
      </form>
    )
  }
}
