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
        <SiIcons.SiXcode title="Xcode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiWindows title="Windows" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGoogleCloudPlatform title="Google Cloud Platform" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiHeroku title="Heroku" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiIntellij title="IntelliJ" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiAtom title="Atom" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDatabase title="Database Management" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiCodepen title="CodePen" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiChrome title="Chrome DevTools" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGulp title="Gulp" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDocker title="Docker" />
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
