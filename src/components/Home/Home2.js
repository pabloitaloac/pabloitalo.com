import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {useTheme} from "../themetype";

function Home2() {
  const { nightMode } = useTheme();

  return (
    <Container fluid className="home-about-section" id="about" style={{marginTop:-200, color:!nightMode&&'black', }}>
      <Container>
        <Row>
        <Col md={8} className="home-about-description" style={{ color:!nightMode&&'black', }}>
  <h1 style={{ fontSize: "2.6em", color:!nightMode&&'black',  }}>
    LET ME <span className="purple">INTRODUCE</span> MYSELF
  </h1>
  <p className="home-about-body" style={{zIndex:'9999', color:!nightMode&&'black', }}>
    I fell in love with programming and I have learned a great deal.
    <br />
    <br />
    I am proficient in modern languages and frameworks such as{" "}
    <i>
      <b className="purple">JavaScript, React, MongoDB, Express, and Node. </b>
    </i>
    Additionally, I have experience with Python, PHP, WordPress, and other technologies.
    <br />
    <br />
    My field of interest lies in developing innovative{" "}
    <i>
      <b className="purple">Web and Mobile Technologies and varied solutions.</b>
    </i>
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{zIndex:'9999', color:!nightMode&&'black', }}>FIND ME ON</h1>
            <p style={{zIndex:'9999', color:!nightMode&&'black', }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pabloitaloac"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/pabloitaloac"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pablo-italo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pabloitaloac"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
