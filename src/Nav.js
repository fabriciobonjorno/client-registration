import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <na>
      <h3>logo</h3>
      <ul>
        <Link to='/states/states'>
        <li>
          States
        </li>
        </Link>
        <Link to='/cities/cities'>
        <li>
          Cities
        </li>
        </Link>
      </ul>
    </na>
  )
}

export default Nav;
