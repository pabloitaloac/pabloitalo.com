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

function Home2(props) {
  const { nightMode } = useTheme();

  return (
    <Container fluid className="home-about-section" id="about" style={{marginTop:-200, color:!nightMode&&'black', }}>
      <Container>
        <Row>
        <Col md={8} className="home-about-description" style={{ color:!nightMode&&'black', }}>
  <h1 style={{ fontSize: "2.6em", color:!nightMode&&'black',  textTransform:'uppercase'}}>
    {props.datatoShow.home4} <span className="purple">{props.datatoShow.home5}</span> {props.datatoShow.home6}
  </h1>
  <p className="home-about-body" style={{zIndex:'9999', color:!nightMode&&'black', }}>
  {props.datatoShow.home7}
    <br />
    <br />
    {props.datatoShow.home8}{" "}
    <i>
      <b className="purple">{props.datatoShow.home9} </b>
    </i>
    {props.datatoShow.home10}
    <br />
    <br />
    {props.datatoShow.home11}{" "}
    <i>
      <b className="purple">{props.datatoShow.home12}</b>
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
            <h1 style={{zIndex:'9999', color:!nightMode&&'black', }}>{props.datatoShow.home13}</h1>
            <p style={{zIndex:'9999', color:!nightMode&&'black', }}>
            {props.datatoShow.home14} <span className="purple">{props.datatoShow.home15} </span>{props.datatoShow.home16}
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
