import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from '@iconify/react';
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import npmIcon from '@iconify-icons/simple-icons/npm';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import githubIcon from '@iconify-icons/simple-icons/github';
import herokuIcon from '@iconify-icons/simple-icons/heroku';

const Skills = () => {
  return (
    <Col md="4" xs="12" className="skills-col">
        <Row className="mr-0">
          <Col md="3" sm="12">
            <h2 className="vertical">SKILLS</h2>
          </Col>
          <Col md="8" sm="11" className="icon-col">
            <Icon icon={html5Icon} className="svgicon" />
            <Icon icon={css3Icon} className="svgicon" />
            <Icon icon={javascriptIcon} className="svgicon" />
            <Icon icon={typescriptIcon} className="svgicon" />
            <Icon icon={jqueryIcon} className="svgicon" />
            <Icon icon={nodeDotJs} className="svgicon" />
            <Icon icon={npmIcon} className="svgicon" />
            <Icon icon={mysqlIcon} className="svgicon" />
            <Icon icon={mongodbIcon} className="svgicon" />
            <Icon icon={githubIcon} className="svgicon" />
            <Icon icon={herokuIcon} className="svgicon" />
          </Col>
        </Row>
      </Col>
  )
}

export default Skills;