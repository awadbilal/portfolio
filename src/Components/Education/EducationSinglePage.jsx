import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./style.css";

function EducationSinglePage({ info }) {
  const { t } = useTranslation();

  return (
    <Container className="singlePage">
      <Row className="title row-eq-height align-items-center pt-4 pb-2" md={12}>
        <h1 data-aos="fade-right">{info.title}</h1>
      </Row>
      <Row>
        <h6 className="pt-2 pb-3">
          <span className="date" data-aos="fade-right">
            {info.duration}
          </span>
          <span className="languages" data-aos="fade-right">
            {info.beginDate} <BsArrowRightShort size="2rem" /> {info.endDate}
          </span>
        </h6>
      </Row>
      <Row className="pt-2 pb-2">
        <p data-aos="fade-right" data-aos-delay="50">
          {info.description}
        </p>
      </Row>
      <Row>
        <h4 data-aos="fade-right" data-aos-delay="50">
          {t("education.completed")}
        </h4>
      </Row>
      <Row className="pt-2 pb-4">
        {info.courses.map((item) => {
          return (
            <Col xs={12} sm={12} md={6} lg={4} data-aos="fade-up">
              <p>
                <BsArrowReturnRight size="1.2rem" /> {item}
              </p>
            </Col>
          );
        })}
      </Row>
      <Row>
        {info.certificate ? (
          <img data-aos="fade-up" src={info.certificate} alt={info.title} />
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
}

export default EducationSinglePage;
