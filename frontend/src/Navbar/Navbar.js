import React, { Component } from 'react'
import {
  Navbar,
} from 'react-bootstrap'

export default class _Navbar extends Component {
  render () {
    return (
      <Navbar>
        <div className='container-fluid'>
          <Navbar.Brand>Yo!</Navbar.Brand>
          {this.props.children}
        </div>
      </Navbar>
    )
  }
}
_Navbar.propTypes = {
  children: React.PropTypes.node,
}
