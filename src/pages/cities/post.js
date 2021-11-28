import React from 'react'
import { Link } from 'react-router-dom'

function CityPost() {
  return(
    <div>
      <h1>Post City</h1>
      <Link to='/cities/cities'>
      <button>Back</button>
      </Link>
    </div>
  )
}

export default CityPost