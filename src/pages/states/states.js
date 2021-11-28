import React from 'react'
import { Link } from 'react-router-dom'

function States() {
  return(
    <div>
      <h1>States</h1>
      <Link to='/states/post'>
      <button>Add</button>
      </Link>
      <Link to='/states/edit'>
      <button>Edit</button>
      </Link>
    </div>
  )
}

export default States