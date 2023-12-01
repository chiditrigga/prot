import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { motion } from "framer-motion";
import Progress from "react-bootstrap/ProgressBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Design from "./components/Design";


function Contact() {
  const skill = [
    "React",
    "Next.js",
    "tailwind",
    "Bootstrap",
    "Javascript",
    "Framer Motion",
    "Git",
  ];
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
          <Design/>
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
                        <i class="bi bi-envelope-at h5 pe-2"></i>{" "}
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
                      <i class="bi bi-telephone h5 pe-2"></i> 08100185232
                    </a>
                  </motion.li>
                </motion.ul>
                <motion.div
                  className="d-flex justify-evenly"
                  initial={{ opacity: 0, y: "100px" }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{ delay: 1.5, duration: 0.9 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://github.com/chiditrigga"
                    className="mx-3 mt-2"
                  >
                    <i class="bi bi-github text-white h2 "></i>
                  </motion.a>{" "}
                  <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://www.linkedin.com/in/chidi-ugwu-43662423a/"
                    className="mx-3 mt-2"
                  >
                    <i class="bi bi-linkedin h2  text-white"></i>
                  </motion.a>{" "}
                  <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://twitter.com/ChidiUg85346290"
                    className="mx-3 mt-2"
                  >
                    <i class="bi bi-twitter-x h2 text-white"></i>
                  </motion.a>
                </motion.div>
              </div>
            </Col>
            <Col md={6} className="text-white  d-flex align-items-center ">
              <div
                style={{ borderLeft: "1px solid silver", minHeight: "60vh" }}
                className="flex justify-content-center w-100 lg-ps-5"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  {/* <h3  style={{
                    
                    listStyle: "none",
                    borderBottom: "1px solid silver",
                  }} className=" mx-5 py-3">Skills</h3> */}
                  <ul style={{ listStyle: "none" }} className="ms-0 ">
                    {skill.map((ski) => {
                      return (
                        <li className="my-2">
                          <h5>{ski}</h5>
                          <Progress
                            animated
                            variant="white"
                            style={{ height: "10px" }}
                            now={95}
                          />
                        </li>
                      );
                    })}
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
