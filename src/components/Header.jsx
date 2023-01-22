import React from 'react'
import { Navbar , Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="/">Blogs</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to='/' className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-info' : 'mx-2 text-decoration-none text-light'}>Home</NavLink>
        <NavLink to='add-blog' className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-info' : 'mx-2 text-decoration-none text-light'}>Add Blog</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header