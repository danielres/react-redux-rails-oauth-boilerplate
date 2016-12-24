import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem'
import './TodoList.css'

// TODO: remove parent
// TODO: sideload NewItem

export default class extends Component {
  componentDidMount () {
    this.props.fetchTodoListItems()
  }

  render() {
    return (
      <div className="TodoList">
        { this.props.loading
          ? "Loading..."
          : <div>
              <ul>
                {this.props.data
                  .sort((a, b) => a.position - b.position)
                  .map((item) =>
                    <Item
                      item={item}
                      key={item.id}
                      destroyItem={this.props.destroyItem}
                      updateItem={this.props.updateItem}
                    />
                  )
                }
              </ul>
              <NewItem
                NewItem={this.props.NewItem}
                updateNewItem={this.props.updateNewItem}
                createItem={this.props.createItem}
              />
            </div>
        }
      </div>
    )
  }
}
