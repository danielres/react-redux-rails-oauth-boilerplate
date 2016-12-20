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
      if (parent.state.inputValue.length > 0) axios.post(`${config.API_ENDPOINT}/item`,
          { id: setId(), name: parent.state.inputValue, position: setPosition(), completed: false}
        )
        .then((response) => {
          parent.setState({
            ...parent.state,
            inputValue: '',
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
