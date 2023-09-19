import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

  import {useTheme} from "../themetype";

function Home() {
        const { nightMode } = useTheme();


  return (
    <section 
    style={{
      backgroundColor:!nightMode&&'white', 
      // color:!nightMode&&'black'
      }}

    >
      <Container  className="home-section" id="home"  style={{zIndex:!nightMode&&'9999', color:!nightMode&&'black', backgroundImage:!nightMode&&'none',}}
      >
        <Particle />
        <Container className="home-content" style={{zIndex:'9999', color:!nightMode&&'black', }}>
          <Row >
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 ,  color:!nightMode&&'black',}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{zIndex:'9999', color:!nightMode&&'black', }}>
                I'M
                <strong className="main-name" style={{zIndex:'9999', color:!nightMode&&'black', }}> PABLO ÍTALO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" , zIndex:'9999', color:!nightMode&&'black', }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2  />
    </section>
  );
}

export default Home;
