import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../Skills";

import Navigation from "../Nav";
import Footer from "../Footer";

const About = () => (
  <div className="main-container">
    <Navigation />
    <Row className="mr-0">
      <Col md="3" xs="4" className="pr-0">
        <img src="./img/flower.png" alt="flower" className="flower-img"></img>
      </Col>
      <Col md="5" xs="8">
        <Row className="first-row">
          <Col lg="4" className="pic-column">
            <img src="./img/profilePic1.jpg" alt="profile" className="profile-pic"></img>
          </Col>
          <Col lg="8">
            <p className="p-about">
              Hello there! My name is Molly and I currently teach high school science in Maine. In anticipation for a future career change, I'm studying full-stack web development through the UNH Coding Boot Camp (along with some Edx and Udemy courses on the side).
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg="4" className="pic-column">
            <img src="./img/bodhi.jpg" alt="Bodhi Dog" className="profile-pic"></img>
          </Col>
          <Col lg="8">
            <p className="p-about">
              In my spare time, I love to hang out with my dog Bodhi - teaching him tricks and taking him for walks on the beach or on the trails. I'm also interested in music, herbal medicine/natural health, yoga, social justice and the interconnectedness of all things.
            </p>
          </Col>

        </Row>
        <hr />
      </Col>

      <Skills />

    </Row>

    <Footer />
  </div>
);

export default About;