import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {AnimatePresence, motion} from 'framer-motion'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import "./index.css";

function Header() {
  return (
    <>
   

    
    <div style={{position:"absolute"}}>


      {["md"].map((expand) => (
        <Navbar
          style={{ textDecoration: "none" , zIndex:"20",position:"relative"}}
          key={expand}
          expand={expand}
          className="bg-body-dark "
        >
          <Container fluid className="nav" style={{width:"100vw"}}>
            <Navbar.Brand
              style={{ color: "#F44336" }}
              href="/"
              className="ps-2 ps-md-3"
            >
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <motion.div>
                       Portfolio
                  </motion.div>
               
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                  <Nav  className="justify-content-end flex-grow-1 pe-3">
                  
                    {" "}
                    <Link
                      className=" pe-2 nav2"
                      style={{
                        textDecoration: "none",
                        color: "grey",
                        fontWeight: "500",
                      }}
                      to={"/"}
                    >
                      <motion.div className="div" whileHover={{
                        scale:1.5
                      }}>
   Home
                      </motion.div>
                   
                    </Link>{" "}
                  
                 
                    {" "}
                    <Link
                      className=" pe-2 nav2"
                      style={{
                        textDecoration: "none",
                        color: "grey",
                        fontWeight: "500",
                      }}
                      to={"/project"}
                    >
                        <motion.div className="div" whileHover={{
                        scale:1.5
                      }}>
   Project
                      </motion.div>
                    </Link>
                
                  
                    {" "}
                    <Link
                      className="pe-2 nav2"
                      style={{
                        textDecoration: "none",
                        color: "grey",
                        fontWeight: "500",
                      }}
                      to={"/contact"}
                    >
                        <motion.div className="div" whileHover={{
                        scale:1.5
                      }}>
   Contact
                      </motion.div>
                    </Link>
                 
                </Nav>
                
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
       </>
  );
}

export default Header;
