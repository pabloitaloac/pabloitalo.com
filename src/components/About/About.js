import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {useTheme} from "../themetype";

function About() {
    const { nightMode } = useTheme();

  return (
    <Container fluid className="about-section" style={{zIndex:'99999', color:!nightMode&&'black', backgroundImage:'none', backgroundColor:!nightMode&&'white',   }}>
      <Particle />
      <Container style={{ color:!nightMode&&'black',  }}>
        <Row style={{ justifyContent: "center", padding: "10px", color:!nightMode&&'black',  }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px", color:!nightMode&&'black', 
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" , color:!nightMode&&'black', }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" style={{color:!nightMode&&'black', }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{color:!nightMode&&'black', }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
