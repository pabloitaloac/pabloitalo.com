import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { useTheme } from '../themetype';
import { loading } from '../Loading/Loading';

const pdfPath = '/CV - English.pdf';

const totalpages = [{ singlepage: 1 }, { singlepage: 2 }];
function ResumeNew() {
  const { nightMode, datatoShow } = useTheme();
  useEffect(() => {
    loading();
  }, []);

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = window.screen.width < 720;

  return (
    <div
      style={{
        backgroundColor: !nightMode && 'white',
        backgroundImage: !nightMode && 'none',
        color: !nightMode && 'black',
      }}
    >
      <Container
        fluid
        className='resume-section'
        style={{
          backgroundColor: !nightMode && 'white',
          backgroundImage: !nightMode && 'none',
          color: !nightMode && 'black',
        }}
      >
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdfPath}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;{datatoShow.resume1}
          </Button>
        </Row>

          <iframe
            title={`resume-full`}
            src={`${pdfPath}#page=1&view=FitH`}
            style={{
              border: 'none',
              width: isMobile ? width * 0.7 : width,
              height: isMobile ? 480 : "auto",
              maxWidth: 1000,
              minHeight: isMobile ? 480 : 1000,
              borderRadius: '8px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          />



        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdfPath}
            target='_blank'
            style={{ maxWidth: '250px' }}
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
