import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {useTheme} from "../themetype";
import Lottie from "lottie-react";
import development_animation from "../../Assets/development_animation.json";
import { useEffect } from "react";
import { loading } from "../Loading/Loading";

function About() {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()
  useEffect(() => {
    loading()
  }, []); 


    return (
    <Container fluid className="about-section" style={{color:!nightMode&&'black', backgroundImage:'none', backgroundColor:!nightMode&&'white',   }}>
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
              {datatoShow.about1} <strong className="purple">{datatoShow.about2}</strong>
            </h1>
            <Aboutcard datatoShow={datatoShow}  />
          </Col>
          <Col
            md={5}
            // style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div className="img-fluid" style={{display:'flex', alignItems:'center', justifyContent:'center', }}>
              <Lottie animationData={development_animation} loop={true}  />
            </div>

            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading" style={{color:!nightMode&&'black', }}>
        {datatoShow.about16} <strong className="purple">{datatoShow.about17} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{color:!nightMode&&'black', }}>
          <strong className="purple">{datatoShow.about18}</strong> {datatoShow.about19}
        </h1>
        <Toolstack />

        <Github datatoShow={datatoShow}/>
      </Container>
    </Container>
  );
}

export default About;
