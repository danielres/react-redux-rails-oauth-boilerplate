import React from 'react'
import { connect } from 'react-redux'

const Welcome = (props) =>
  <div className="container text-center">
    <p>Welcome, {props.profile.display_name} !</p>
  </div>

const mapStateToProps = (state) => ({
  profile: state.auth.user.profile,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)
