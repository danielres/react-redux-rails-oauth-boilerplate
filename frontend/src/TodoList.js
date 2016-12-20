import React, { Component } from 'react'
import { fetchItems } from './TodoList/actions'
import Item from './TodoList/Item'
import NewItem from './TodoList/NewItem'
import './TodoList.css'

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
    fetchItems(this)
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
