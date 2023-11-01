import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Advice from "./images/advice.jpg";
import ecom from "./images/ecom.jpg";
import landing from "./images/landing1.jpg";
import tip from "./images/tip.jpg";
import clip from "./images/clip.jpg";
import news from "./images/news.jpg";
import sign from "./images/sign.jpg";
import poster from "./images/Poster.svg";
import todo from "./images/todo.jpg"
import {motion} from 'framer-motion'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./index.css";

function projects() {
  return (
  <>
  <Header/>
    <motion.div
    initial={{y:"100%"}}
    animate={{y:0}}
    exit={{opacity:1}}
    transition={{duration:0.5}}
    >
      
      <Container >
        <Row>
          <Col className="text-center py-2 mx-2" style={{borderBottom:"3px solid #F44336"}}>
            <h1  style={{ color: "red" }}>Projects</h1>
          </Col>
        </Row>
        <Row className="mt-3"> 
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3 ">
            <motion.div className="min max"  whileHover={{
              scale:1.2,
            
            }}>
 <Card  className="min max" style={{maxHeight:"200px"}}>
              <a href="https://adviceapp2.vercel.app/">
              <motion.div className="min max" style={{maxHeight:"100px"}} whileHover={{
              scale:1.1,
              
            }}>
 <Card.Img  fluid variant="top" src={Advice} style={{maxHeight:"100px"}} />
              </motion.div>
               
              </a>
              <Card.Body>
               <p className="fs-7">An advice generator using third party api <br />
               <a href="https://github.com/chiditrigga/adviceapp2">
                  
                    git repository
                  </a>{" "}
               </p> 
                
                 
                  
                
              </Card.Body>
            </Card>
            </motion.div>
           
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div className="min max" whileHover={{
              scale:1.2
             
            }}>

 <Card className="min max">
              <a href="https://ecomweb-tau.vercel.app/">
              <motion.div  className="min max" whileHover={{
              scale:1.1
            }}>
 <Card.Img fluid variant="top" src={ecom} style={{maxHeight:"100px"}}/>
              </motion.div>
               
              </a>
              <Card.Body>
                <p className="fs-6 ">An ecom website <br />
                 <a href="https://github.com/chiditrigga/ecomweb">
                    git repository
                  </a>
                </p>
               
                 {" "}
                
              </Card.Body>
            </Card>
              </motion.div>
           
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
<Card className="min max">
              <a href="https://news-blog-b8hg.vercel.app/">
              <motion.div  whileHover={{
              scale:1.1
            }}>
 <Card.Img fluid variant="top" src={landing} style={{maxHeight:"100px"}}/>
              </motion.div>
               
              </a>
              <Card.Body>
                <p className="fs-6">A landing page <br />
                  <a href="https://github.com/chiditrigga/introPage">
                    git repository
                  </a>{" "}
                </p>
             
                  {" "}
                
              
              </Card.Body>
            </Card>
              </motion.div>
            
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
 <Card className="min max">
              <a href="https://workcat.vercel.app/">
              <motion.div  className="min max" whileHover={{
              scale:1.1
            }}>
   <Card.Img fluid variant="top" src={tip} style={{maxHeight:"100px"}}/>
              </motion.div>
             
              </a>
              <Card.Body>
                <p className="fs-6">An app for calculating tips <br />
                 <a href="https://github.com/chiditrigga/workcat">
                    git repository
                  </a>{" "}
                </p>
              
                 
             
              </Card.Body>
            </Card>
              </motion.div>
           
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
 <Card className="min max">
              <a href="https://clipapp-two.vercel.app/">
              <motion.div className="min max" whileHover={{
              scale:1.1
            }}>
                   <Card.Img fluid variant="top" src={clip} style={{maxHeight:"100px"}}/>
              </motion.div>
                
              </a>
              <Card.Body>
                <p className="fs-6">A clipboard website <br />
                 <a href="https://github.com/chiditrigga/clipapp">
                    git repository
                  </a>
                </p>
               
                 {" "}
                
              </Card.Body>
            </Card>
              </motion.div>
           
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
 <Card className="min max">
              <a href="https://newsappss.vercel.app/">
              <motion.div  className="min max" whileHover={{
              scale:1.1
            }}>
   <Card.Img fluid variant="top" src={news} style={{maxHeight:"100px"}}/>
              </motion.div>
             
              </a>
              <Card.Body>
                <p className="fs-6">News blog <br />
                 <a href="https://github.com/chiditrigga/newsappss">
                    git repository
                  </a>
                </p>
               
                 {" "}
               
              </Card.Body>
            </Card>
              </motion.div>
           
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
<Card className="min max" style={{maxHeight:"200px"}}>
              <a href="https://drag-and-drop-gallery.vercel.app/">
              <motion.div  className="min max"   whileHover={{
              scale:1.1
            }}>
   <Card.Img fluid variant="top" src={sign} style={{maxHeight:"100px"}} />
              </motion.div>
             
              </a>
              <Card.Body>
                <p className="fs-6">A gallery app with drag and drop <br />
                 <a href="https://github.com/chiditrigga/dragAndDropGallery">
                    git repository
                  </a>
                </p>
             
                  {" "}
                 {" "}
              
              </Card.Body>
            </Card>
              </motion.div>
            
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
          <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
  <Card className="min max" style={{maxHeight:"200px"}}>
              <a href="https://pro002-eight.vercel.app/">
              <motion.div  className="min max" whileHover={{
              scale:1.1
            }}>
 <Card.Img fluid variant="top" src={poster} />
              </motion.div>
               
              </a>
              <Card.Body>
                <p className="fw-6"> movie app <br />
                 <a href="https://github.com/chiditrigga/pro002">
                    git repository
                  </a>{" "}
                </p>
            
                 
               
              </Card.Body>
            </Card>
              </motion.div>
          
          </Col>
             <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
             <motion.div  className="min max" whileHover={{
              scale:1.2
            }}>
 <Card className="min max">
              <a href="https://tasklist-ruddy.vercel.app/">
              <motion.div   whileHover={{
              scale:1.1
            }}>
 <Card.Img fluid variant="top" src={todo} style={{maxHeight:"100px"}}/>
              </motion.div>
               
              </a>
              <Card.Body>
                <p className="fs-6">A todo app
                <br />
                <a href="https://github.com/chiditrigga/tasklist">
                    git repository
                  </a>{" "}
                </p>
             
                  {" "}
                 
                
              </Card.Body>
            </Card>
              </motion.div>
           
          </Col>
        </Row>
      </Container>
    </motion.div>
 </> );
}

export default projects;
