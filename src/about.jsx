import React from "react";
import { useNavigate } from "react-router-dom";

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
import {AnimatePresence, motion} from 'framer-motion'

function About() {
  const navigate = useNavigate();
    return (
        <div>
             <Header/>
   
 


     
     

     <Container   className="scr">
       <Row>
         <Col className="d-flex align-items-center vh-100">
           <div>
             <h1 style={{ color: "#F44336" }}>Hey, I'm Daniel</h1>

             <p className="underline font-bold">
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
  
               <Button
          
               className="mx-2"
               variant="outline-warning"
               onClick={() => navigate("/project")}
             >
               
    
                  {" "}
               projects{" "}
               
              
             </Button>
            
             
           </div>
         </Col>
       </Row>
     </Container>

        </div>
    );
}

export default About;