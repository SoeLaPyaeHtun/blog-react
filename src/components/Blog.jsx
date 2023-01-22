import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Blog = ({blog}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
       {blog.description.substring(0,150)+'...'}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body> 
  </Card>
  )
}

export default Blog