import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
