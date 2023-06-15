import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiReact title="React + React Native" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiNodejs  title="Node" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiJavascript1  title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiMongodb  title="Mongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDatabase  title="Databases" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPython  title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiApple  title="iOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiAndroid  title="Android" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiHtml5  title="Html5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiCss3  title="Css3" />
      </Col>






    </Row>
  );
}

export default Techstack;
