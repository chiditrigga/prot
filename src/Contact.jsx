import React, { useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const location = useLocation();
  const [showw, setShoww] = useState(true);

  const routeVarients = {
    initial: {
      y: "100vh",
      opacity: 1,
    },
    final: {
      y: "0vh",
    },
  };

  return (
    <>
     
     <Header />
      <motion.div
          initial={{
            y: "100vh"
          }}
          animate={{ y: "0vh"}}
          transition={{
            duration: 0.2,
            ease: "easeOut",
            type: "spring",
            mass: 0.9,
          }}
        style={{ background: "#3f51b5" }}
      >
         
        <Container>
          <Row>
            <Col className="d-flex align-items-center vh-100">
              <div>
                <motion.h1 
                 initial={{
                  y: "300px"
                }}
                animate={{ y: "0px"}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  mass: 0.9,
                }}
                style={{ color: "red" }}>Contact</motion.h1>
                <ul>
                  <li className="contact" style={{ color: "white" }}>
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
                    <a
                      className="contact"
                      style={{ color: "white" }}
                      href="tel:+2348100185232"
                    >
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
