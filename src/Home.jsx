import React from 'react'
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Header from './Header';


function Home() {
    const navigate = useNavigate()

  return (
    <>
    
 <Header/>

      <Container>
        <Row>
            <Col className='d-flex align-items-center vh-100'>
            <div >
                 <h1>Hey, I'm Daniel</h1>
                
                 <p>I am currently a full stack developer seeking many ways to improve my skills through problem-solving and creating various projects</p>
                 <Button variant="outline-danger" onClick={ () => navigate("/contact")}> Contact </Button>
                 </div>
                 
            </Col>
        </Row>

      </Container>
    
    </>
  )
}

export default Home