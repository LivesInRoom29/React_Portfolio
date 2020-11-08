import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeLinks from "../HomeLinks";

const Home = () => (
  <Jumbotron fluid>
    <Container >
      <h1>Welcome To My Portfolio</h1>
      <h2>I hope you enjoy buzzing around!</h2>
    </Container>
    <Container className="home-buttons">
      <Row className="justify-content-center">
        <Col>
          <HomeLinks value="About" imagename="bee"></HomeLinks>
        </Col>
        <Col>
          <HomeLinks value="Projects" imagename="honeypot"></HomeLinks>
        </Col>
        <Col>
          <HomeLinks value="Contact" imagename="beedance"></HomeLinks>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;