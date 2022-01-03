import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function SinglePage( { info } ) {
  
  return (
    <Container className="singlePage">
      <Row className="title row-eq-height align-items-center pt-4 pb-2" md={12}>
        <Col xs={9} sm={9} md={9} lg={9}>
          <h1 data-aos="fadeLeft" data-aos-delay="50">
            {info.title}
          </h1>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <p data-aos="fadeRight" data-aos-delay="50">
            <a href={info.link} target="_blank">Visit Webpage</a>
          </p>
        </Col>
      </Row>
      <Row>
        <h6 className="pt-2 pb-3">
          <span className="date" data-aos="fadeLeft" data-aos-delay="50">{info.date}</span>
          <span className="languages" data-aos="fadeLeft" data-aos-delay="50">{info.languages}</span>
        </h6>
      </Row>
      <Row className='pt-2 pb-4'>
        <p data-aos="fadeLeft" data-aos-delay="50">
          {info.description}
        </p>
      </Row>
      <Row>
        <img
          data-aos="fadeDown"
          src={info.gif}
          alt={info.title}
        />
      </Row>
    </Container>
  );
}

export default SinglePage;
