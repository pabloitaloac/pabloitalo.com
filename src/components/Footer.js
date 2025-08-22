import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import  {useTheme} from "./themetype";

function Footer() {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()

  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer"             style={{backgroundColor:!nightMode&&'black', zIndex:'999999999999'}}

    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{datatoShow.footer1}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{datatoShow.footer2}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/pabloitaloac"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/pabloitaloac"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pablo-italo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
