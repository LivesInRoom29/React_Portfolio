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
  techUsed: string
}

const Project = (props: ProjectProps) => {
  return (
    <Row className="project-row">
      <Col sm="12" md="5">
        <h2 className="project-heading">{props.name}</h2>
        <img src={props.image} alt={props.name} className="project-img"></img>
      </Col>
      <Col sm="12" md="7" className="md-6 sm-12">
        <p>{props.description}</p>
        <h3 className="project-heading">Tech Used</h3>
        <p>{props.techUsed}</p>
        <Button href={`${props.deployed}`} target="_blank" className="project-link">
          Deployed Site
        </Button>
        <Button href={`${props.repo}`} target="_blank" className="project-link">
          <Icon icon={githubIcon} className="project-link" />
        </Button>
      </Col>
    </Row>
  )
}

export default Project;