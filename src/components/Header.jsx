import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap'

function Header() {
  return (
    <>  
      <div style={{marginBottom:'70px'}}>
        <Navbar  expand="lg" style={{zIndex:'1'}} className="bg-light position-fixed top-0 w-100  ">
          <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Link className='me-auto navs' to={'/home'} style={{textDecoration:'none'}}>Tutorials</Link>
            <Navbar.Brand><Link className='ms-5 logo navs ' to={'/'} style={{textDecoration:'none', fontSize:'40px'}}>Fashion Stitch</Link></Navbar.Brand>
              <Nav className="ms-auto">
              <Link className='ms-5 navs' to={'/history'} style={{textDecoration:'none'}}>History</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  
    </>
  )
}

export default Header