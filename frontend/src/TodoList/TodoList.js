import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem'
import './TodoList.css'

export default class extends Component {
  componentDidMount () {
    this.props.fetchTodoListItems()
  }

  render () {
    return (
      <div className="TodoList">
        { this.props.loading
          ? 'Loading...'
          : <div>
              <ul>
                {this.props.data.map((item) =>
                  <Item
                    item={item}
                    key={item.id}
                    destroyItem={this.props.destroyItem}
                    updateItem={this.props.updateItem}
                  />
                )}
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
