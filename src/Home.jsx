import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import About from "./about";

function Home() {
  const navigate = useNavigate();
  const isVisible = true;

  const routeVarients = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
    },
  };
  return (
    <>
      
      <Header/>
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
      
        

      
        <Container className="scr">
        
          <Row>
            <Col className="d-flex align-items-center vh-100">
          
              <div >
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
                style={{ color: "#F44336" }}>Hey, I'm Daniel</motion.h1>

                <p className="underline font-bold bolder text-white fs-4">
                  I am currently a front-end web developer seeking many ways to
                  improve my skills through problem-solving and creating various
                  projects
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
                  scale:1.1
                }}
                style={{borderRadius:"500px",borderColor:"none",background:"#F44336",color:"white",weight:"600",border:"none"}}
                
                  initial={{
                    x: "1000px"
                  }}
                  animate={{ x: "0px",rotate:"360deg"}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    mass: 0.5,
                  }}
                  className="mx-2 p-3"
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
