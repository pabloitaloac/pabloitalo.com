import React from "react";
import { Col, Row } from "react-bootstrap";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPhp title="Php" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiWordpress title="Wordpress" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiNginx title="Nginx" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiUbuntu title="Ubuntu" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiWindows title="Windows" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiPostman title="Postman" />
      </Col>
    </Row>
  );
}

export default Toolstack;
