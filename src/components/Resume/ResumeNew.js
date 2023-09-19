import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import {useTheme} from "../themetype";
import { translation } from "../translation";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const totalpages = [{singlepage:1},{singlepage:2},{singlepage:3},]
function ResumeNew() {
  const { nightMode } = useTheme();
  const datatoShow = translation()

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
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

        <Row className="resume" style={{gap:'10px'}}>
          {totalpages && totalpages.map((single)=>{
            if(single.singlepage){
              return(
                <Document file={pdf} className="d-flex justify-content-center " key={single.singlepage}>
                  <Page pageNumber={single.singlepage} scale={width > 786 ? 1.7 : 0.6}  />
                </Document>
            )
          }
          })}
        </Row>

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
