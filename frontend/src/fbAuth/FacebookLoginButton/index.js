import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FacebookLoginButton from './FacebookLoginButton'
import {
  requestLogin,
  receiveLogin,
  logoutUser,
} from '../actions'

const mapStateToProps = (state) => (
  {
    isAuthenticated: state.fbAuth.isAuthenticated,
  }
)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    requestLogin,
    receiveLogin,
    logoutUser,
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLoginButton)
