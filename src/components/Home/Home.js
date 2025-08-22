import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import work_animation from "../../Assets/work_animation.json";
import Lottie from "lottie-react";
import { loading } from "../Loading/Loading";

  import {useTheme} from "../themetype";

function Home() {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()
  useEffect(() => {
    loading()
  }, []); 

  return (
    <section 
    style={{
      backgroundColor:!nightMode&&'white', 
      // color:!nightMode&&'black'
      }}

    >
      <Container  className="home-section" id="home"  style={{color:!nightMode&&'black', backgroundImage:!nightMode&&'none',}}
      >
        <Particle />
        <Container className="home-content" style={{color:!nightMode&&'black', }}>
          <Row >
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 ,  color:!nightMode&&'black',}} className="heading">
                {datatoShow.home1}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{color:!nightMode&&'black', }}>
              {datatoShow.home2}
                <strong className="main-name" style={{color:!nightMode&&'black', }}> PABLO ÍTALO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" , color:!nightMode&&'black', }}>
                <Type datatoShow={datatoShow}/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={animation1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}

                <Lottie animationData={work_animation} loop={true} />



            </Col>
          </Row>
        </Container>
      </Container>
      <Home2  datatoShow={datatoShow}/>
    </section>
  );
}

export default Home;
