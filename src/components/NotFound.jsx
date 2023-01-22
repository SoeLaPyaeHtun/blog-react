import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h1>Page Not Found</h1>
        <h1>
            <Link to='/'>
            <button className='btn btn-primary'>Back To Home Page</button>
            </Link>
            </h1>
    </div>
  )
}

export default NotFound