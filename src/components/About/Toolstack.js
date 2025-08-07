import React from "react";
import { Col, Row } from "react-bootstrap";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiPostman title="Postman" />
      </Col>
      
      {/* Cloud Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiGoogleCloudPlatform title="Google Cloud" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiMicrosoftazure title="Azure" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiSupabase title="Supabase" />
      </Col>
      
      {/* DevOps & Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiTerraform title="Terraform" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiNginx title="Nginx" />
      </Col>
      
      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiUbuntu title="Ubuntu" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiWindows title="Windows" />
      </Col>
      
      {/* Project Management & Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiSlack title="Slack" />
      </Col>
      
      {/* No-Code/Low-Code Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiWebflow title="Webflow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiZapier title="Zapier" />
      </Col>
      
      {/* Mobile Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiXcode title="Xcode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiAndroidstudio title="Android Studio" />
      </Col>
      
      {/* Additional Services */}
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIcons.DiWordpress title="WordPress" />
      </Col>
    </Row>
  );
}

export default Toolstack;

