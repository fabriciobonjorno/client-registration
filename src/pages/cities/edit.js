import React from 'react'
import { Link } from 'react-router-dom'

function CityEdit() {
  return(
    <div>
      <h1>Edit City</h1>
      <Link to='/cities/cities'>
      <button>Back</button>
      </Link>
    </div>
  )
}

export default CityEdit