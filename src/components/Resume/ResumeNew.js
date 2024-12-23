import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import {useTheme} from "../themetype";
import { loading } from "../Loading/Loading";
import pdf from "../../Assets/../Assets/resume.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const totalpages = [{singlepage:1},{singlepage:2},{singlepage:3},]
function ResumeNew() {
  const {nightMode,datatoShow}=useTheme()
  useEffect(() => {
    loading()
  }, []); 


  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = window.screen.width<720

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);



  return (
    <div          style={{
      backgroundColor:!nightMode&&'white', 
      backgroundImage:!nightMode&&'none',
      color:!nightMode&&'black'
      }}
>
      <Container fluid className="resume-section" style={{
      backgroundColor:!nightMode&&'white', 
      backgroundImage:!nightMode&&'none',
      color:!nightMode&&'black'
      }}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{datatoShow.resume1}
          </Button>
        </Row>

        {/* <Row className="resume" style={{gap:'10px'}}> */}
        <div style={{display:'flex', flexDirection:isMobile?'column':'row',  margin:"20px auto 20px auto", justifyContent:'center',  width:isMobile?'80%':'100%', height:isMobile?'400px':'700px', overflowY:'auto', zIndex:'9999', gap:'20px'}}>
        {totalpages &&
            totalpages.map((single) => {
              if (single.singlepage) {
                return (
                  <div key={single.singlepage}>
                    {/* <Document file={pdfUrl}  > */}
                    <Document file={pdf}  >
                      <Page
                        pageNumber={single.singlepage}
                        width={isMobile?width * 0.7 : width/3.2}
                      />
                    </Document>
                  </div>
                );
              }
              return null;
            })}
        </div>
        {/* </Row>;z */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{datatoShow.resume1}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
