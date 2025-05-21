import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import docstree from "../../Assets/Projects/docs-tree.png";
import hewantsbarber from "../../Assets/Projects/hewantsbarber.png";
import reboucasofficial from "../../Assets/Projects/reboucasofficial.png";
import {useTheme} from "../themetype";
import { loading } from "../Loading/Loading";



function Projects() {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()
  useEffect(() => {
    loading()
  }, []); 

  return (
    <Container fluid className="project-section"      
      style={{
      backgroundColor:!nightMode&&'white', 
      backgroundImage:!nightMode&&'none',
      color:!nightMode&&'black'
      }}
    >
      <Particle />
      <Container         
        style={{
        backgroundColor:!nightMode&&'white', 
        backgroundImage:!nightMode&&'none',
        color:!nightMode&&'black'
        }}
      >
        <h1 className="project-heading" style={{color:!nightMode&&'black'}}>
          {datatoShow.projects1} <strong className="purple">{datatoShow.projects2} </strong>
        </h1>
        <p style={{ color:!nightMode?'black':'white' }}>
        {datatoShow.projects3}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {
              datatoShow.projects && datatoShow.projects.map((singleProject,index)=>{
                return(
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      imgPath={singleProject.projects_image}
                      isBlog={false}
                      title={singleProject.projects_show}
                      description={singleProject.projects_show_1}
                      ghLink={singleProject.projects_show_ghLink}
                      demoLink={singleProject.projects_show_demoLink}
                      LiveLink={singleProject.projects_show_LiveLink}
                      highlight={singleProject.highlight}
                    />    
                  </Col>
                )
              })
            }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
