import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{color:'white'}}>
           <i className="text-warning  fa-solid fa-video me-3"></i>
            MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
