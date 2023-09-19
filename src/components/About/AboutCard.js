import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {useTheme} from "../themetype";

function AboutCard(props) {
  const { nightMode } = useTheme();

  return (
<Card className="quote-card-view" style={{color:!nightMode&&'black', }}>
  <Card.Body>
    <blockquote className="blockquote mb-0" style={{color:!nightMode&&'black', }}>
      <p style={{ textAlign: "justify" }}>
      {props.datatoShow.about3} <span className="purple">Pablo Ítalo</span>{props.datatoShow.about5} <span className="purple">{props.datatoShow.about6}</span>.
        <br />{props.datatoShow.about7} <span className="purple">{props.datatoShow.about8}</span>
        <br />{props.datatoShow.about9} <span className="purple">{props.datatoShow.about10}</span>
        <br />
        {props.datatoShow.about11}
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> {props.datatoShow.about12}
        </li>
        <li className="about-activity">
          <ImPointRight /> {props.datatoShow.about13}
        </li>
        <li className="about-activity">
          <ImPointRight /> {props.datatoShow.about14}
        </li>
      </ul>

      <p style={{ color: "rgb(155, 126, 172)" }}>
      {props.datatoShow.about15}
      </p>
      <footer className="blockquote-footer">- pabloitaloac</footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
