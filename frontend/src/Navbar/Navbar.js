import React from 'react'
import { Link } from 'react-router'
import {
  Navbar,
} from 'react-bootstrap'

import LogoutButton from './LogoutButton'

const _Navbar = (props) =>
  <Navbar>
    <div className='container-fluid'>
      <Navbar.Brand>Yo!</Navbar.Brand>
      <Navbar.Form>
        { props.isAuthenticated &&
          <div>
            <Link className='btn btn-default' to='/'>Home</Link>
            {' '}
            <Link className='btn btn-default' to='/todo'>TodoList</Link>
            {' '}
            <LogoutButton />
          </div>
        }
      </Navbar.Form>
    </div>
  </Navbar>

_Navbar.propTypes = {
  children: React.PropTypes.node,
}

export default _Navbar
