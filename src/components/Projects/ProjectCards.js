import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import live from '../../Assets/live.svg'
import { BsGithub } from "react-icons/bs";
import {useTheme} from "../themetype";
import star from '../../Assets/star.svg'


function ProjectCards(props) {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" 
        style={
          nightMode?
          {
            height:'50%',
            width:'90%',
            margin:'0 auto',
            padding:'0px',
            objectFit:'cover',
            objectPosition:'center',
            boxShadow:'0 10px 15px rgb(255, 255, 255, 0.4)',
            borderRadius:'10px',    
          }
          :
          {
            height:'50%',
            width:'90%',
            margin:'0 auto',
            padding:'0px',
            objectFit:'cover',
            objectPosition:'center',
            boxShadow:'0 10px 15px rgba(0, 0, 0, 0.1)',
            borderRadius:'10px',    
          }
        }/>
      <Card.Body style={{color:!nightMode&&'black',  display:'flex', flexDirection:'column', gap:'10px', }}>
        
        <Card.Title style={{fontSize:'20px',  position:'relative', top:'0px', fontWeight:'bold', display:'flex', gap:'10px', alignItems:'center', justifyContent:'center',  }} className="purple">{props.highlight&&<img src={star} width='30px' />}{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{display:'flex', margin:'auto auto 0px auto', justifyContent:'center', position:'relative', bottom:'0px', }}>
          
        {props.ghLink && <>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        </>}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {!props.isBlog && props.LiveLink && (
          <Button
            variant="primary"
            href={props.LiveLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <img src={live} width='30px' /> &nbsp;
            {"Live"}
          </Button>
        )}
                </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
