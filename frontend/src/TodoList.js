import config from './config.js'
import axios from 'axios'
import React, { Component } from 'react'

import './TodoList.css'
import Item from './TodoList/Item'
import NewItem from './TodoList/NewItem'

export default class extends Component {
  constructor () {
    super()

    this.state = {
      inputValue: "",
      items: {
        loading: true,
        data: []
      }
    }
  }

  componentDidMount () {
    axios.get(`${config.API_ENDPOINT}/item`)
      .then((response) => {
        this.setState({
          ...this.state,
          items: { ...this.state.items, loading: false, data: response.data}
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="TodoList">
        { this.state.items.loading
          ? "Loading..."
          : <div>
              <ul>
                {this.state.items.data.sort((a, b) => a.position - b.position).map((item) =>
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
        }
      </div>
    )
  }
}
