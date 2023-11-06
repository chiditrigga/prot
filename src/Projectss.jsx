import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Advice from "./images/advice.jpg";
import ecom from "./images/ecom.jpg";
import landing from "./images/landing1.jpg";
import tip from "./images/tip.jpg";
import clip from "./images/clip.jpg";
import news from "./images/news.jpg";
import sign from "./images/sign.jpg";
import poster from "./images/Poster.svg";
import todo from "./images/todo.jpg";
import { AnimatePresence, motion } from "framer-motion";
import github from "./images/github.png"

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
import Spinner from 'react-bootstrap/Spinner';
import "./index.css";

function Projectss() {
 

  const [isloading,setIsloading] = useState(true)

  const onLoad = () => {
    setIsloading(false)
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
        style={{ background: "black" }}
      >
       
        <Container style={{ height: "100vh" }}>
    
          <div>
            <Row>
              <Col
                className="text-center py-2 mx-2 mt-5"
                style={{ borderBottom: "3px solid #F44336" }}
              >
                <h1 style={{ color: "red" }}>Projects</h1>
              </Col>
            </Row>
            <Row
              style={{ maxHeight: "500px", overflowX: "hidden" }}
              className="overflow-y-scroll mt-3 py-4 pe-4 lg-px-5 "
            >
              <Col xs={12} md={4}  className="p-2 py-3 p-lg-3 ">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3" style={{ maxHeight: "200px" }}>
                    <a href="https://adviceapp2.vercel.app/">
                      <motion.div
                      
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={Advice}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-7">
                        An advice generator using third party api <br />
                        <a href="https://github.com/chiditrigga/adviceapp2">
                          
                          <Image src={github}/>
                        </a>{" "}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://ecomweb-tau.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={ecom}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6 ">
                        An ecom website <br />
                        <a href="https://github.com/chiditrigga/ecomweb">
                        <Image src={github}/>
                        </a>
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://news-blog-b8hg.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={landing}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        A landing page <br />
                        <a href="https://github.com/chiditrigga/introPage">
                        <Image src={github}/>
                        </a>{" "}
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://workcat.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={tip}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        An app for calculating tips <br />
                        <a href="https://github.com/chiditrigga/workcat">
                        <Image src={github}/>
                        </a>{" "}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://clipapp-two.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={clip}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        A clipboard website <br />
                        <a href="https://github.com/chiditrigga/clipapp">
                        <Image src={github}/>
                        </a>
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                initial={{
                  scale:2
                }}
                animate={{
                  scale:1
                }}
                transition={{
                  delay:0.2,
                    duration:0.3
                }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://newsappss.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={news}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        News blog <br />
                        <a href="https://github.com/chiditrigga/newsappss">
                        <Image src={github}/>
                        </a>
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3" style={{ maxHeight: "200px" }}>
                    <a href="https://drag-and-drop-gallery.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={sign}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        A gallery app with drag and drop <br />
                        <a href="https://github.com/chiditrigga/dragAndDropGallery">
                        <Image src={github}/>
                        </a>
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  initial={{
                    scale:2
                  }}
                  animate={{
                    scale:1
                  }}
                  transition={{
                    delay:0.2,
                    duration:0.3
                  }}
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3" style={{ maxHeight: "200px" }}>
                    <a href="https://pro002-eight.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={poster}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fw-6">
                        {" "}
                        movie app <br />
                        <a href="https://github.com/chiditrigga/pro002">
                        <Image src={github}/>
                        </a>{" "}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={4}  className="p-2 py-3 p-md-3">
                <motion.div
                  className="min max"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Card className="min max mx-3">
                    <a href="https://tasklist-ruddy.vercel.app/">
                    <motion.div
                        className="min max"
                        style={{ maxHeight: "100px" , minHeight:"80px" }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      > 

                      <Card.Img
                       className= {isloading ? "d-none ": ""}
                          fluid
                          variant="top"
                          src={todo}
                          style={{ maxHeight: "100px"}}
                          onLoad={onLoad}
                        />
                        <div className="d-flex justify-content-center align-items-center pt-5">
                          {isloading && <Spinner className="" style={{color:"grey"}}  animation="border" />}
                        </div>
                        
                       
                      </motion.div>
                    </a>
                    <Card.Body>
                      <p className="fs-6">
                        A todo app
                        <br />
                        <a href="https://github.com/chiditrigga/tasklist">
                        <Image src={github}/>
                        </a>{" "}
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default Projectss;
