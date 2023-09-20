import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import {useTheme} from "../themetype";

function Github(props) {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color:!nightMode&&'black', }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color:!nightMode&&'black',  }}>
      {props.datatoShow.about20} <strong className="purple">{props.datatoShow.about21}</strong>
      </h1>
      <GitHubCalendar
        username="pabloitaloac"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
