import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "../Nav";
import Footer from "../Footer";



const Credits = () => (
  <>
    <div className="main-container">
      <Navigation />
      <h1>Credits</h1>
      <Row className="mr-0">
        <Col>
          <ul>
            <li>
              <a href="https://www.freepik.com/vectors/background" rel="noreferrer" target="_blank">Background vector created by starline - www.freepik.com</a>
            </li>
            <li>
              <a href="https://svg-clipart.com/outline/fV3ovCH-bee-clipart" title="Bee" rel="noreferrer" target="_blank">Bee SVG icons</a>
            </li>
            <li>
              <a href="https://www.pinclipart.com/pindetail/ibbRoox_honey-pot-black-and-white-clipart/" rel="noreferrer"  target="_blank">Honey Pot</a>
            </li>
            <li>
              <a href="https://www.pngwing.com/en/free-png-ynekp/" rel="noreferrer" target="_blank">Bee dance</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Footer />
    </div>
  </>
);

export default Credits;