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

const Project = (props: ProjectProps) => {
  const { name, image, description, techUsed, deployed, repo, login } = props;

  return (
    <Row className="project-row">
      <Col sm="12" md="5">
        <h2 className="project-heading">{name}</h2>
        <img src={image} alt={name} className="project-img"></img>
      </Col>
      <Col sm="12" md="7" className="md-6 sm-12">
        <p>{description}</p>
        <h3 className="project-heading">Tech Used</h3>
        <p>{techUsed}</p>
        <Button href={`${deployed}`} target="_blank" className="project-link">
          Deployed Site
        </Button>
        <Button href={`${repo}`} target="_blank" className="project-link">
          <Icon icon={githubIcon} className="project-link" />
        </Button>

        {login &&
          <p>To login for a demo, use the email demo123@demo.com and password test123.</p>
        }
      </Col>
    </Row>
  )
}

export default Project;