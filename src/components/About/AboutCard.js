import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pablo Ítalo </span>
            from <span className="purple"> Brazil.</span>
            <br />I am a Full Stack Developer with MERN Stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always do your best!"{" "}
          </p>
          <footer className="blockquote-footer">pabloitaloac</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
