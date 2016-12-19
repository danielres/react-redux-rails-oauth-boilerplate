import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {parent} = this.props

    const setPosition = () => Math.max(...parent.state.items.map((i) => i.position)) + 1
    const setId = () => Math.max(...parent.state.items.map((i) => i.id)) + 1

    const updateInputValue = (e) => parent.setState({...parent.state, inputValue: e.target.value})

    const submitNew = (e) => {
      e.preventDefault()
      const newItem = { id: setId(), name: parent.state.inputValue, position: setPosition(), completed: false}
      parent.setState(
        { ...parent.state,
          inputValue: "",
          items: [...parent.state.items, newItem] }
      )
    }

    return(
      <form>
        <input
          type="text"
          value={parent.state.inputValue}
          onChange={updateInputValue}
        />
        <button
          onClick={submitNew}
        >
          ok
        </button>
      </form>
    )
  }
}
