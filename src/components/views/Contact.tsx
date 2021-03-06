import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Icon } from '@iconify/react';
import phoneFilled from '@iconify-icons/carbon/phone-filled';
import documentPdf from '@iconify-icons/carbon/document-pdf';
import githubIcon from '@iconify-icons/simple-icons/github';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import emailIcon from '@iconify-icons/carbon/email';


import Navigation from "../Nav";
import Footer from "../Footer";

const Contact = () => (
  <>
    <Navigation />
    <div>
      <h1 className="contact-heading">Get in Touch</h1>
      <h2 className="contact-heading">I'd love to hear from you!</h2>
      <Row className="contact-container d-flex align-content-center mr-0">
        <p className="contact-phone">
          <Icon icon={phoneFilled} />
            (207) 404 - 6030
        </p>
        <br />
        <Row className="d-flex justify-content-center mr-0">
          <Button className="contact-link" href="mailto: molly.kizer@gmail.com" target="_blank"><Icon icon={emailIcon} /></Button>
          <Button className="contact-link hoverable middle" href="https://github.com/LivesInRoom29" target="_blank"><Icon icon={githubIcon} /></Button>
          <Button className="contact-link hoverable" href="https://www.linkedin.com/in/mkizer-2b52471a8" target="_blank"><Icon icon={linkedinIcon} /></Button>
        </Row>

        <hr />
        <p className="contact-link">
          <Link to="/resume"  className="contact-link resume-link">
            <Button className="contact-link"><Icon icon={documentPdf} />Résumé</Button>
          </Link>

        </p>
      </Row>
    </div>

    <Footer />
  </>
);

export default Contact;