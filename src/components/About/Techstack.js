import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiJavascript1  title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPython  title="Python" />
      </Col>
      
      {/* Frontend Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiReact title="React + React Native" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiVuedotjs title="Vue.js" />
      </Col>
      
      {/* Backend Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiNodejs  title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiNestjs title="NestJS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiExpress title="Express.js" />
      </Col>
      
      {/* AI/ML Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiOpenai title="OpenAI API" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiPython title="LangChain" />
      </Col>
      
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiMongodb  title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiRedis title="Redis" />
      </Col>
      
      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiGooglecloud title="Google Cloud" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiMicrosoftazure title="Azure" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTerraform title="Terraform" />
      </Col>
      
      {/* Styling & UI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiBootstrap title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiSass title="Sass" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiCss3 title="CSS3" />
      </Col>
      
      {/* APIs & Communication */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiGraphql title="GraphQL" />
      </Col>
      
      {/* Mobile */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiApple title="iOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiAndroid title="Android" />
      </Col>
      
      {/* Legacy Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiPhp  title="PHP" />
      </Col>
    </Row>
  );
}

export default Techstack;
