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
      <Header />
      <Container>
        <Row>
          <Col className="text-center py-2" style={{borderBottom:"3px solid #F44336"}}>
            <h1 style={{ color: "red" }}>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card className="card">
              <a href="https://adviceapp2.vercel.app/">
                <Card.Img fluid variant="top" src={Advice} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/adviceapp2">
                    {" "}
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://ecomweb-tau.vercel.app/">
                <Card.Img fluid variant="top" src={ecom} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/ecomweb">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://news-blog-b8hg.vercel.app/">
                <Card.Img fluid variant="top" src={landing} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/introPage">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://workcat.vercel.app/">
                <Card.Img fluid variant="top" src={tip} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/workcat">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://clipapp-two.vercel.app/">
                <Card.Img fluid variant="top" src={clip} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/clipapp">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://newsappss.vercel.app/">
                <Card.Img fluid variant="top" src={news} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/newsappss">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://drag-and-drop-gallery.vercel.app/">
                <Card.Img fluid variant="top" src={sign} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/dragAndDropGallery">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} lg={3} className="p-2 py-3 p-md-3">
            <Card>
              <a href="https://pro002-eight.vercel.app/">
                <Card.Img fluid variant="top" src={poster} />
              </a>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="https://github.com/chiditrigga/pro002">
                    git repository
                  </a>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default projects;
