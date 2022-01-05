import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "../Work/WorkCard";
import { useTranslation } from "react-i18next";
import Data from "../Work/workList";
import "./style.css";
import { Link } from "react-router-dom";

function FeaturedWork() {
  const { t } = useTranslation();

  return (
    <Container className="featuredWork pt-3">
      <Row className="title row-eq-height align-items-center pb-3" md={12}>
        <Col xs={9} sm={9} md={8} lg={8}>
          <h4 data-aos="fadeLeft" data-aos-delay="100">
            {t("home.featured")}
          </h4>
        </Col>
        <Col xs={3} sm={3} md={4} lg={4}>
          <p data-aos="fadeRight" data-aos-delay="100">
            <Link to="/works">{t("home.view")}</Link>
          </p>
        </Col>
      </Row>
      {Data.slice(0, 3).map((item) => (
        <WorkCard info={item} />
      ))}
    </Container>
  );
}

export default FeaturedWork;
