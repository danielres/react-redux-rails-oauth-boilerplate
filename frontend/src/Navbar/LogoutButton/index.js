import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from './actions'
import LogoutButton from './LogoutButton'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    logout,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)
