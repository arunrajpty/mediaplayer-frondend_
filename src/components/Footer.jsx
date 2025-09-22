
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>

          <div className='d-flex justify-content-center align-items-center '>
        
            <div className='footer d-flex justify-content-center align-items-evenly  '>
                <div style={{width:'300px',color:'white'}}>
                     <Navbar >
                        <Container>
                        <Navbar.Brand >
                        <h5 style={{color:'white'}}><i className="text-warning  fa-solid fa-video me-3"></i> media player</h5>
                            
                        </Navbar.Brand>
                        </Container>
                     </Navbar>
                     <p style={{textAlign:'justify'}}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impres.</p>
                </div>


                <div className='d-flex align-items-center flex-column ms-4  mt-3' style={{width:'200px',color:'white',textAlign:'justify',}}>
                    <h5 >Links</h5>  
                    <Link to="/" style={{textDecoration:'none',color:'white'}}>Landing page</Link>
                    <Link to="/homepage" style={{textDecoration:'none',color:'white'}}>Home page</Link>
                    <Link to='watchhistory' style={{textDecoration:'none',color:'white'}}>watch history</Link>
                </div>


                <div className='mt-3'  style={{width:'300px',color:'white',textAlign:'justify'}}>
                    <h5>Guides</h5>
                    <p > Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. </p>
                </div>


                <div className='ms-4 mt-3'>
                    <h5 style={{color:'white'}}>Contact Us</h5>
                  <div className='d-flex' style={{color:'white',textAlign:'justify'}}>
                      <input type="text" placeholder='enter yout email' />
                      <button className='btn btn-warning ms-3'>subscribe</button>
                  </div>
                  <div className='d-flex mt-4 justify-content-evenly' >
                    <Link target='_blank' to='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></Link>
                    <Link target='_blank' to='https://www.twitter.com/'><i className="fa-brands fa-twitter"></i></Link>
                   <Link target='_blank' to='https://www.facebook.com/'> <i className="fa-brands fa-facebook"></i></Link>
                    <Link target='_blank' to='https://www.whatsapp.com/'><i className="fa-brands fa-whatsapp"></i></Link>
                    <Link target='_blank' to='https://www.reddit.com/'><i className="fa-brands fa-reddit"></i></Link>
                  </div>
                </div>     


            </div>
          </div>

    </div>
  )
}

export default Footer