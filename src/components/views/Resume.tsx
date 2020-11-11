import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Navigation from "../Nav";
import Footer from "../Footer";

const Resume = () => (
  <>
    <div className="main-container">
      <Navigation />
      <h1>Resume</h1>
      <Container>
        <Row>
          <iframe src="https://drive.google.com/file/d/1SUefx5VxAWm_nkzDXKzf5SeBv4XX3L11/preview" title="resume" width="640" height="480"></iframe>
        </Row>
      </Container>
      <Footer />
    </div>
  </>
);

export default Resume;