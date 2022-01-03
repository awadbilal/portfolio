import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import "./style.css";

function WorkCard( { info } ) {
  return (
    <Row className="row-eq-height workCard" data-aos="fade-up">
      <Col xs={12} sm={12} md={4} lg={4}>
        <img
          src={info.image}
          alt={info.title}
        />
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <Row className="title row-eq-height align-items-center pb-1" md={12}>
          <Col xs={9} sm={9} md={9} lg={9}>
            <h2 data-aos="fadeLeft" data-aos-delay="50">
              {info.title}
            </h2>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <p data-aos="fadeRight" data-aos-delay="50">
              <a href={`/${info.title.replace(/\s/g, '').toLowerCase()}`}>
                <BsArrowRightShort size="3rem" style={{color: "#FFFFFF", backgroundColor: '#FF6464', borderRadius: "50%"}} />
              </a>
            </p>
          </Col>
        </Row>
        <h6 className="pt-2 pb-3">
          <span className="date">{info.date}</span>
          <span className="languages">{info.languages}</span>
        </h6>
        <p>{info.description}</p>
      </Col>
      <div className="cardEndLine mt-4 mb-4"></div>
    </Row>
  );
}

export default WorkCard;
