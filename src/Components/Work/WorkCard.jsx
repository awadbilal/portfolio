import React from 'react';
import { Row, Col } from 'react-bootstrap';
import IMDBA from '../../locales/images/imdba.png';
import './style.css';

function WorkCard(props) {
  return (
    <Row className="row-eq-height workCard" data-aos="fade-up">
      <Col xs={12} sm={12} md={4} lg={4}>
        <img src={IMDBA} alt="The Movie DBA" style={{maxWidth: "inherit", minHeight: "inherit", width: "100%"}} />
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <h2>
          The Movie Database
        </h2>
        <h6 className='pt-2 pb-3'>
          <span className='date'>2020</span><span className='languages'>JS / HTML5 / CSS3</span>
        </h6>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </Col>
      <div className="cardEndLine mt-4"></div>
    </Row>
  );
}

export default WorkCard;
