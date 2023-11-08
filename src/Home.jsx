import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./index.css";
import { motion } from "framer-motion";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <motion.div
        initial={{
          y: "100vh",
        }}
        animate={{ y: "0vh" }}
        transition={{
          duration: 1000,
          ease: "easeOut",
          type: "spring",
          mass: 0.9,
        }}
        style={{ background: "#0e072c" }}
      >
        <Container className="scr">
          <Row>
            <Col className="d-flex align-items-center vh-100">
              <div>
                <motion.div
                 initial={{
                  y: "300px",
                }}
                animate={{ y: "0px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  mass: 0.9,
                }}
                >

             
                <motion.h1
                  initial={{
                    borderRight: "1px solid #F44336",
                  }}
                  animate={{ borderRight: "0px solid #F44336", }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.2,
                    repeat:Infinity,
                    repeatType:"mirror",
                    repeatDelay:0.4
                    
                   
                  }}
                  style={{ color: "#F44336",width:"fit-content" }}
                >
                  Hey, I'm Daniel
                </motion.h1>
                </motion.div>

                <p  className="underline font-bold bolder text-white fs-4">
                  I am currently a front-end web developer seeking many ways to
                  improve my skills through problem-solving and creating various
                  projects.
                </p>

                <Button
                  variant="outline-danger"
                  onClick={() => navigate("/contact")}
                >
                  {" "}
                  Contact{" "}
                </Button>

                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  style={{
                    borderRadius: "10px",
                    borderColor: "none",
                    background: "#F44336",
                    color: "white",
                    weight: "600",
                    border: "none",
                  }}
                  initial={{
                    x: "1000px",
                  }}
                  animate={{ x: "0px", rotate: "360deg" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    mass: 0.5,
                  }}
                  className="mx-2 px-3 py-3"
                  // variant="outline-warning"
                  onClick={() => navigate("/project")}
                >
                  {" "}
                  projects{" "}
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
