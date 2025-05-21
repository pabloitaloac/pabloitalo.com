import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiNodejs  title="Node" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiNestjs title="Nest.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiReact title="React + React Native" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPython  title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiJavascript1  title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPhp  title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiMongodb  title="Mongodb" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiApple title="iOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiAndroid title="Android" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiHtml5 title="Html5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiCss3 title="Css3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiSass title="Sass" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiBootstrap title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiRedis title="Redis" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiGraphql title="GraphQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiExpress title="Express.js" />
      </Col>
    </Row>
  );
}

export default Techstack;
