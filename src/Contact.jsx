import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (<>
<Header />
<Container >
        <Row>
            <Col className='d-flex align-items-center vh-100'>
            <div >
                 <h1>Contact</h1>
                 <ul>
                  <li>                <h4><a href = "mailto: chididaniel1998@gmail.com">chididaniel1998@gmail.com</a></h4></li>
                  <li><a href="tel:+2348100185232">08100185232</a></li>
                 </ul>

                 
                 </div>
                 
            </Col>
        </Row>

      </Container>
  </>)
}

export default Contact