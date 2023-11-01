import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from 'framer-motion'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import "./index.css";

function Header() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          style={{ textDecoration: "none" }}
          key={expand}
          expand={expand}
          className="bg-body-dark mb-3"
        >
          <Container fluid className="nav">
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
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
                  </Nav.Link>
                  <Nav.Link>
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
                  </Nav.Link>
                  <Nav.Link>
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
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
