import React from 'react'
import { Link } from 'react-router-dom'

function Cities() {
  return(
    <div>
      <h1>Cities</h1>
      <Link to='/cities/post'>
      <button>Add</button>
      </Link>
      <Link to='/cities/edit'>
      <button>Edit</button>
      </Link>
    </div>
  )
}

export default Cities