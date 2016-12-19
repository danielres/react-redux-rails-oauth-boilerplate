import config from '../config.js'
import axios from 'axios'
import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {parent} = this.props

    const setPosition = () => Math.max(...parent.state.items.data.map((i) => i.position)) + 1
    const setId = () => Math.max(...parent.state.items.data.map((i) => i.id)) + 1

    const updateInputValue = (e) => parent.setState({...parent.state, inputValue: e.target.value})

    const submitNew = (e) => {
      e.preventDefault()
      const newItem = { id: setId(), name: parent.state.inputValue, position: setPosition(), completed: false}
      axios.post(`${config.API_ENDPOINT}/item`,
          newItem
        )
        .then((response) => {
          parent.setState({
            ...parent.state,
            items: {...parent.state.items, data: [...parent.state.items.data, response.data]}
          })
        })
        .catch((error) => {
          console.log(error)
        })
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
