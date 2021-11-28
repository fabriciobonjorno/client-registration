import React from 'react'
import { Link } from 'react-router-dom'

function statePost() {
  return(
    <div>
      <h1>Post State</h1>
      <Link to='/states/states'>
      <button>Back</button>
      </Link>
    </div>
  )
}

export default statePost