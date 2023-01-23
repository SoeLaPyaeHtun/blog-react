import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
       {blog.description.substring(0,150)+'...'}
      </Card.Text>
      <Link variant="primary" className='btn btn-primary' to={`blogs/${blog.id}`}>Detail</Link>
    </Card.Body> 
  </Card>
  )
}

export default Blog