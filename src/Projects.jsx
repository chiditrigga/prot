import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Advice from './images/advice.jpg'
import ecom from './images/ecom.jpg'
import landing from './images/landing1.jpg'
import tip from './images/tip.jpg'
import todo from './images/todo.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function projects() {
  return (
          <Container>


{['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container >
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}












            
            <Row>
              <Col className='text-center'><h1>projects</h1></Col>
            </Row>
           <Row>
            <Col xs={12} md={4} lg={3} className='p-2 py-3 p-md-3'>
            <Card>
              <a href="https://adviceapp2.vercel.app/">
    <Card.Img fluid variant="top" src={Advice} />
    </a>
    <Card.Body>

      <Card.Title> <a href="https://github.com/chiditrigga/adviceapp2"> git repository</a> </Card.Title>

    </Card.Body>
   
  </Card>
            </Col>
            <Col xs={12} md={4} lg={3}  className='p-2 py-3 p-md-3'>
          
            <Card >
            <a href="https://ecomweb-tau.vercel.app/">
    <Card.Img fluid variant="top" src={ecom} />
    </a>
    <Card.Body>
      <Card.Title>  <a href="https://github.com/chiditrigga/ecomweb">git repository</a> </Card.Title>
      
    </Card.Body>
    
  </Card>
            </Col>
            <Col xs={12} md={4} lg={3}  className='p-2 py-3 p-md-3'>
            <Card >
              <a href="https://news-blog-b8hg.vercel.app/">
    <Card.Img fluid variant="top" src={landing} />
    </a>
    <Card.Body>
      <Card.Title> <a href="https://github.com/chiditrigga/introPage">git repository</a>  </Card.Title>
     
    </Card.Body>
  </Card>
            </Col>
            <Col xs={12} md={4} lg={3}  className='p-2 py-3 p-md-3'>
            <Card >
              <a href="https://workcat.vercel.app/">
    <Card.Img fluid variant="top" src={tip} />
    </a>
    <Card.Body>
      <Card.Title> <a href="https://github.com/chiditrigga/workcat">git repository</a> </Card.Title>
    
    </Card.Body>
  </Card>
            </Col>
           </Row>
        
    
   
  </Container>
  )
}

export default projects