import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.css";

function EducationCard({ info }) {
  return (
    <Row className="row-eq-height educationCard" data-aos="fade-up">
      <Col xs={12} sm={12} md={3} lg={3}>
        <img src={info.image} alt={info.title} />
      </Col>
      <Col xs={12} sm={12} md={9} lg={9}>
        <Row className="title row-eq-height align-items-center pb-1" md={12}>
          <Col xs={9} sm={9} md={9} lg={9}>
            <h2 data-aos="fadeLeft" data-aos-delay="50">
              {info.title}
            </h2>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <p data-aos="fadeRight" data-aos-delay="50">
              <Link to={`/${info.title.replace(/\s/g, "").toLowerCase()}`}>
                <BsArrowRightShort
                  size="3rem"
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#FF6464",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </p>
          </Col>
        </Row>
        <h6 className="pt-2 pb-3">
          <span className="date">{info.duration}</span>
          <span className="languages">
            {info.beginDate} <BsArrowRightShort size="2rem" /> {info.endDate}
          </span>
        </h6>
        <p>{info.description}</p>
      </Col>
      <div className="cardEndLine mt-4 mb-4"></div>
    </Row>
  );
}

export default EducationCard;
