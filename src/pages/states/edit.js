import React from 'react'
import { Link } from 'react-router-dom'

function stateEdit() {
  return(
    <div>
      <h1>Edit State</h1>
      <Link to='/states/states'>
      <button>Back</button>
      </Link>
    </div>
  )
}

export default stateEdit