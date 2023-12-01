import React, { useState } from "react";
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
import { motion } from "framer-motion";
import github from "./images/github.png";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Spinner from "react-bootstrap/Spinner";
import "./index.css";
import Design from "./components/Design";

function Projectss() {
  const [isloading, setIsloading] = useState(true);

  const list = [
    {
      live: "https://adviceapp2.vercel.app/",
      image: Advice,
      about: " An advice generator using third party api",
      git: "https://github.com/chiditrigga/adviceapp2",
    },

    {
      live: "https://ecomweb-tau.vercel.app/",
      image: ecom,
      about: "An ecom website",
      git: "https://github.com/chiditrigga/ecomweb",
    },

    {
      live: "https://workcat.vercel.app/",
      image: tip,
      about: " An app for calculating tips ",
      git: "https://github.com/chiditrigga/workcat",
    },

    {
      live: "https://drag-and-drop-gallery.vercel.app/",
      image: sign,
      about: " A gallery app with authentication and drag and drop features",
      git: "https://github.com/chiditrigga/dragAndDropGallery",
    },

    {
      live: "https://pro002-eight.vercel.app/",
      image: poster,
      about: " movie app",
      git: "https://github.com/chiditrigga/pro002",
    },

    {
      live: "https://tasklist-ruddy.vercel.app/",
      image: todo,
      about: "A todo app",
      git: "https://github.com/chiditrigga/tasklist",
    },

    {
      live: "https://thriving-druid-264941.netlify.app/",
      image: landing,
      about: "A landing page for a business",
      git: "https://github.com/chiditrigga/introPage",
    },

    {
      live: "https://news-blog-b8hg.vercel.app/",
      image: news,
      about: "News blog",
      git: "https://github.com/chiditrigga/introPage",
    },

    {
      live: "https://clipapp-two.vercel.app/",
      image: clip,
      about: " A clipboard website",
      git: "https://github.com/chiditrigga/clipapp",
    },
  ];

  const onLoad = () => {
    setIsloading(false);
  };

  return (
    <>
      <Header />
      

      <motion.div
        initial={{
          y: "100vh",
        }}
        animate={{ y: "0vh" }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          mass: 0.9,
        }}
        style={{ background: "#0e072c" }}
      >
        <Container style={{ height: "100vh" }}>
          <Design/>
          <div>
            <Row>
              <Col
                className="text-center py-2 mx-2 mt-5"
                style={{ borderBottom: "1px solid silver" }}
              >
                <h1 style={{ color: "silver" }}>Projects</h1>
              </Col>
            </Row>
            <Row
              style={{ overflowX: "hidden" }}
              className="overflow-y-scroll mt-3 py-4 pe-4 lg-px-5 five"
            >
              {list.map((lis) => {
                return (
                  <Col xs={12} md={4} className="p-2 py-3 p-lg-3 ">
                    <motion.div
                      initial={{
                        scale: 2,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="min max"
                      whileHover={{
                        scale: 1.1,
                      }}
                    >
                      <Card
                        className="min max mx-3"
                        style={{ maxHeight: "200px" }}
                      >
                        <a href={lis.live}>
                          <motion.div
                            className="min max"
                            style={{ maxHeight: "100px", minHeight: "80px" }}
                            whileHover={{
                              scale: 1.1,
                            }}
                          >
                            <Card.Img
                              className={isloading ? "d-none " : ""}
                              fluid
                              variant="top"
                              src={lis.image}
                              style={{ maxHeight: "100px" }}
                              onLoad={onLoad}
                            />
                            <div className="d-flex justify-content-center align-items-center pt-5">
                              {isloading && (
                                <Spinner
                                  className=""
                                  style={{ color: "grey" }}
                                  animation="border"
                                />
                              )}
                            </div>
                          </motion.div>
                        </a>
                        <Card.Body>
                          <p className="fs-7">
                            {lis.about} <br />
                            <a href={lis.git}>
                              <Image src={github} />
                            </a>{" "}
                          </p>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default Projectss;
