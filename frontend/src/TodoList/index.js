import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import {
  fetchTodoListItems,
  updateNewItem,
  createItem,
  destroyItem,
  updateItem,
} from './actions'

const mapStateToProps = (state) =>
  ({...state.TodoList})

const mapDispatchToProps = (dispatch) =>({
  fetchTodoListItems,
  createItem,
  destroyItem,
  updateItem,
  ...bindActionCreators({
    updateNewItem
  }, dispatch )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
