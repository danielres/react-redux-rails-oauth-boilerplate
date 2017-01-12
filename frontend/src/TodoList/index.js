import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { unKey } from './helpers'
import TodoList from './TodoList'
import {
  fetchTodoListItems,
  updateNewItem,
  createItem,
  destroyItem,
  updateItem,
} from './actions'

const mapStateToProps = (state) => (
  {
    loading: state.TodoList.loading,
    NewItem: state.TodoList.NewItem,
    data: unKey(state.TodoList.data).sort((a, b) => a.position - b.position),
  }
)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchTodoListItems,
    createItem,
    destroyItem,
    updateItem,
    updateNewItem,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
