import React, { Component } from 'react'
import { updateInputValue } from './actions'
import { submitNew } from './actions'

export default class extends Component {
  render() {
    const {parent} = this.props

    return(
      <form>
        <input
          type="text"
          value={parent.state.inputValue}
          onChange={(e) => updateInputValue(parent, e)}
        />
        <button
          onClick={(e) => submitNew(parent, e)}
        >
          ok
        </button>
      </form>
    )
  }
}
