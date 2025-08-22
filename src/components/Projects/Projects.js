import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import { useTheme } from '../themetype';
import { loading } from '../Loading/Loading';

function Projects() {
  const { nightMode, datatoShow } = useTheme();
  useEffect(() => {
    loading();
  }, []);

  return (
    <Container
      fluid
      className='project-section'
      style={{
        backgroundColor: !nightMode && 'white',
        backgroundImage: !nightMode && 'none',
        color: !nightMode && 'black',
      }}
    >
      <Particle />
      <Container
        style={{
          backgroundColor: !nightMode && 'white',
          backgroundImage: !nightMode && 'none',
          color: !nightMode && 'black',
        }}
      >
        <h1
          className='project-heading'
          style={{ color: !nightMode && 'black' }}
        >
          {datatoShow.projects1}{' '}
          <strong className='purple'>{datatoShow.projects2} </strong>
        </h1>
        <p style={{ color: !nightMode ? 'black' : 'white' }}>
          {datatoShow.projects3}
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {datatoShow.projects &&
            datatoShow.projects.map((singleProject, index) => {
              return (
                <Col md={4} className='project-card' key={index}>
                  <ProjectCard
                    imgPath={singleProject.projects_image}
                    isBlog={false}
                    title={singleProject.projects_show}
                    subHeader={singleProject.projects_subHeader}
                    description={singleProject.projects_show_1}
                    ghLink={singleProject.projects_show_ghLink}
                    demoLink={singleProject.projects_show_demoLink}
                    LiveLink={singleProject.projects_show_LiveLink}
                    highlight={singleProject.highlight}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
