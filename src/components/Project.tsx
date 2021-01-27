import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/simple-icons/github';
import Button from "react-bootstrap/Button";

interface ProjectProps {
  type: string,
  name: string,
  repo: string,
  deployed: string,
  image: string,
  description: string,
  techUsed: string,
  login: boolean
}

// This component takes in the project data as props and uses it to populate the
// sections on the Projects page with the information for each one.

const Project = (props: ProjectProps) => {
  const { name, image, description, techUsed, deployed, repo, login } = props;

  return (
    <Row className="project-row">
      <Col sm="12" md="5">
        <h2 className="project-heading">{name}</h2>
        <img src={image} alt={name} className="project-img"></img>
      </Col>
      <Col sm="12" md="7" className="md-6 sm-12 project-info">
        <p>{description}</p>
        <h3 className="project-heading">Tech Used</h3>
        <p>{techUsed}</p>
        <Button href={`${deployed}`} target="_blank" className="project-link">
          Deployed Site
        </Button>
        <Button href={`${repo}`} target="_blank" className="project-link">
          <Icon icon={githubIcon} className="project-link" />
        </Button>

        {/* If there is a login for the deployed project, add this code with demo credentials. */}
        {login &&
          <p className="login">To login for a demo, use the email <span className="login">demo123@demo.com</span> and password <span className="login">test123.</span></p>
        }
      </Col>
    </Row>
  )
}

export default Project;