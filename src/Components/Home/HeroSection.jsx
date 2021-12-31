import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Billy from '../../locales/images/circleResume.png';

const HeroSection = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Hi, I am Bilal,</h1>
          <h1>Front-end Web Developer</h1>
          <br />
          <p>I'm a Front-end web developer passionate about web development and the creativity that comes out of it, interested in continuous self-developing, looking forward to improve my skills and expanding my knowledge. With enough knowledge, i am hoping that one day i will become a Cyber-security engineer.</p>
        </Col>
        <Col md={4}>
          <div>
            <img src={Billy} alt="Bilal Avvad" />
          </div>
        </Col>
      </Row>
      <Row>
        <Button> Download Resume</Button>
      </Row>
    </Container>
  );
}

export default HeroSection;
