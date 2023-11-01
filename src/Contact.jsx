import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <>
      <Header />
      <motion.div
    initial={{y:"100%"}}
    animate={{y:0}}
    exit={{opacity:1}}
    transition={{duration:0.5}}
    >
      <Container>
        <Row>
          <Col className="d-flex align-items-center vh-100">
            <div>
              <h1 style={{ color: "red" }}>Contact</h1>
              <ul>
                <li  className="contact" style={{ color: "white" }}>
                  {" "}
                  <h4>
                    <a
                   className="contact" 
                      style={{ color: "white" }}
                      href="mailto: chididaniel1998@gmail.com"
                    >
                      chididaniel1998@gmail.com
                    </a>
                  </h4>
                </li>
                <li className="contact" style={{ color: "white" }}>
                  <a className="contact"  style={{ color: "white" }} href="tel:+2348100185232">
                    08100185232
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      </motion.div>
    </>
  );
}

export default Contact;
