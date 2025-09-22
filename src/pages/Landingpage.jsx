import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Landingpage() {
  return (
    <div>

      

       <Container>
        <Row>
          <h5 className='mt-4 ' style={{color:'white'}}>Welcome to <span className='text-warning'>mediaplayer</span></h5>
        </Row>
      <Row>
        <Col className='mt-5' sm={8}><p style={{color:'white'}}>Media tristique ante ut cursus tempor. Pellentesque a lacus orci. Praesent vestibulum, erat in aliquam rhoncus, sem ex finibus odio, sed faucibus tellus elit et ante. Maecenas porttitor ac diam vehicula aliquet. Nam accumsan nisl sed diam vehicula malesuada.Phasellus maximus lacinia diam, sit amet volutpat nunc semper vel. Sed quis mattis orci. Integer elementum tristique accumsan. Phasellus in nisi non dolor pulvinar placerat. Donec vulputate urna sed mauris imperdiet sodales. Fusce neque magna, molestie nec est ut, dignissim elementum purus. Nunc augue est, dictum vitae eleifend sit amet, condimentum id mauris. Vivamus ac ipsum leo. Aenean accumsan gravida imperdiet. Vivamus erat enim, dictum elementum neque vitae, tristique rhoncus risus. Fusce sed lorem lacinia, dapibus risus quis, luctus neque. Integer mi urna, aliquet in sodales ut, porttitor quis metus.</p></Col>
        <Col sm={3}><img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" width={'450px'} height={'400px'} /></Col>
      </Row>
     <Link to='/homepage'> <button className='btn btn-warning mb-4'> Get Start  <i class="fa-solid fa-arrow-right ms-2"></i></button></Link>
      
    </Container>
     <br />

     <div className='container mb-5'>
       <div className='d-flex justify-content-center justify-content-evenly'>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
       </div>
     </div>
     

    </div>
  )
}

export default Landingpage