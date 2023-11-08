import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { motion } from "framer-motion";
import Progress from "react-bootstrap/ProgressBar";

function Contact() {
  return (
    <>
      <Header />
      <motion.div
        initial={{
          y: "100vh",
        }}
        animate={{ y: "0vh" }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          type: "spring",
          mass: 0.9,
        }}
        style={{ background: "#0e072c" }}
      >
        <Container>
          <Row>
            <Col className="d-flex align-items-center vh-100 " md={6}>
              <div>
                <motion.h1
                  initial={{
                    y: "300px",
                  }}
                  animate={{ y: "0px" }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    type: "spring",
                    mass: 0.9,
                  }}
                  className="py-3 "
                  style={{
                    color: "red",
                    listStyle: "none",
                    borderBottom: "1px solid silver",
                  }}
                >
                  Contact
                </motion.h1>
                <motion.ul
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                    type: "spring",
                    mass: 0.9,
                  }}
                >
                  <li
                    className="contact py-3"
                    style={{
                      color: "white",
                      listStyle: "none",
                      borderBottom: "1px solid silver",
                    }}
                  >
                    {" "}
                    <motion.h4
                      whileHover={{
                        x: "20px",
                      }}
                    >
                      <a
                        className="contact"
                        style={{ color: "white", textDecoration: "none" }}
                        href="mailto: chididaniel1998@gmail.com"
                      >
                        chididaniel1998@gmail.com
                      </a>
                    </motion.h4>
                  </li>
                  <motion.li
                    whileHover={{
                      x: "20px",
                    }}
                    className="contact py-3"
                    style={{
                      color: "white",
                      listStyle: "none",
                      borderBottom: "1px solid silver",
                    }}
                  >
                    <a
                      className="contact"
                      style={{ color: "white", textDecoration: "none" }}
                      href="tel:+2348100185232"
                    >
                      08100185232
                    </a>
                  </motion.li>
                </motion.ul>
              </div>
            </Col>
            <Col md={6} className="text-white  d-flex align-items-center ">
              <div
                style={{ borderLeft: "1px solid silver", minHeight: "60vh" }}
                className="flex justify-content-center w-100 lg-ps-5"
              >
                <motion.div
                
                 initial={{opacity:0}}
                 animate={{opacity:1,y:"10px"}}
                 transition={{
                  delay:1,
                  duration:0.8,
                  ease: "easeOut"
                 }}
                >
                  {/* <h3  style={{
                    
                    listStyle: "none",
                    borderBottom: "1px solid silver",
                  }} className=" mx-5 py-3">Skills</h3> */}
                  <ul  style={{ listStyle: "none" }} className="ms-0">
                    <li className="my-1">
                      {" "}
                      <h5>React</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>Next.js</h5>{" "}
                      <Progress  animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>Tailwind</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>Bootstrap</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>Framer Motion</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li>
                      {" "}
                      <h5>Javascript</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>React</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                    <li className="my-1">
                      {" "}
                      <h5>Git</h5>{" "}
                      <Progress animated variant="danger" now={90} />
                    </li>
                  </ul>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Contact;
