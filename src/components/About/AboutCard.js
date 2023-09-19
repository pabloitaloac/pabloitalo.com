import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {useTheme} from "../themetype";

function AboutCard() {
  const { nightMode } = useTheme();

  return (
<Card className="quote-card-view" style={{color:!nightMode&&'black', }}>
  <Card.Body>
    <blockquote className="blockquote mb-0" style={{color:!nightMode&&'black', }}>
      <p style={{ textAlign: "justify" }}>
        Hello everyone, I'm <span className="purple">Pablo Ítalo</span>, a <span className="purple">Senior Full Stack Developer</span>.
        <br />I work with various technologies, including <span className="purple">React</span>, <span className="purple">React Native</span>, <span className="purple">Node</span>, and <span className="purple">more</span>.
        <br />With my knowledge, I create diverse features such as <span className="purple">Web Pages</span>, <span className="purple">Panels</span>, and <span className="purple">APIs</span>.
        <br />
        Besides coding, there are a few other activities that I love to engage in!
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Playing Games
        </li>
        <li className="about-activity">
          <ImPointRight /> Travelling
        </li>
        <li className="about-activity">
          <ImPointRight /> Watching Anime
        </li>
      </ul>

      <p style={{ color: "rgb(155, 126, 172)" }}>
        "Always do your best!"
      </p>
      <footer className="blockquote-footer">- pabloitaloac</footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
