import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function WorkCard( { info } ) {
  return (
    <Row className="row-eq-height workCard" data-aos="fade-up">
      <Col xs={12} sm={12} md={4} lg={4}>
        <img
          src={info.image}
          alt="The Movie DBA"
          style={{ maxWidth: "inherit", minHeight: "inherit", width: "100%" }}
        />
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <h2>{info.title}</h2>
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
