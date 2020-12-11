import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from '@iconify/react';
import ReactTooltip from "react-tooltip";
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import npmIcon from '@iconify-icons/simple-icons/npm';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import reactIcon from '@iconify-icons/simple-icons/react';
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
            {/* Each skill icon has a tooltip associated with it that shows on hover */}
            <Icon icon={html5Icon} className="svgicon" data-tip data-for="html"/>
            <ReactTooltip id="html" place="bottom" effect="solid">
              HTML5
            </ReactTooltip>

            <Icon icon={css3Icon} className="svgicon" data-tip data-for="css"/>
            <ReactTooltip id="css" place="bottom" effect="solid">
              CSS3
            </ReactTooltip>

            <Icon icon={javascriptIcon} className="svgicon" data-tip data-for="js"/>
            <ReactTooltip id="js" place="bottom" effect="solid">
              JavaScript
            </ReactTooltip>

            <Icon icon={typescriptIcon} className="svgicon" data-tip data-for="ts"/>
            <ReactTooltip id="ts" place="bottom" effect="solid">
              TypeScript
            </ReactTooltip>

            <Icon icon={jqueryIcon} className="svgicon" data-tip data-for="jquery"/>
            <ReactTooltip id="jquery" place="bottom" effect="solid">
              jQuery
            </ReactTooltip>

            <Icon icon={nodeDotJs} className="svgicon" data-tip data-for="node"/>
            <ReactTooltip id="node" place="bottom" effect="solid">
              Node.js
            </ReactTooltip>

            <Icon icon={npmIcon} className="svgicon" data-tip data-for="npm"/>
            <ReactTooltip id="npm" place="bottom" effect="solid">
              npm
            </ReactTooltip>

            <Icon icon={mysqlIcon} className="svgicon" data-tip data-for="mysql"/>
            <ReactTooltip id="mysql" place="bottom" effect="solid">
              MySQL
            </ReactTooltip>

            <Icon icon={mongodbIcon} className="svgicon" data-tip data-for="mongo"/>
            <ReactTooltip id="mongo" place="bottom" effect="solid">
              MongoDB
            </ReactTooltip>

            <Icon icon={reactIcon} className="svgicon" data-tip data-for="react"/>
            <ReactTooltip id="react" place="bottom" effect="solid">
              React
            </ReactTooltip>

            <Icon icon={githubIcon} className="svgicon" data-tip data-for="github"/>
            <ReactTooltip id="github" place="bottom" effect="solid">
              GitHub
            </ReactTooltip>

            <Icon icon={herokuIcon} className="svgicon" data-tip data-for="heroku"/>
            <ReactTooltip id="heroku" place="bottom" effect="solid">
              Heroku
            </ReactTooltip>
          </Col>
        </Row>
      </Col>
  )
}

export default Skills;