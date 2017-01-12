import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FacebookLogoutButton from './FacebookLogoutButton'
import {
  logout,
} from '../actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    logout,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLogoutButton)
