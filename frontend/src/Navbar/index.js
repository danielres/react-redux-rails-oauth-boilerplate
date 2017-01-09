import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {
  loginUser,
  logoutUser,
} from '../auth/actions'

const mapStateToProps = (state) => (
  {
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  }
)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    loginUser,
    logoutUser,
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
