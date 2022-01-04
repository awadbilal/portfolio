import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "../Work/WorkCard";
import { useTranslation } from "react-i18next";
import Data from '../Work/workList';
import "./style.css";

function FeaturedWork() {
  const { t } = useTranslation();

  return (
    <Container className="featuredWork pt-3">
      <Row className="title row-eq-height align-items-center pb-3" md={12}>
        <Col xs={9} sm={9} md={9} lg={9}>
          <h4 data-aos="fadeLeft" data-aos-delay="100">
            {t("home.featured")}
          </h4>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <p data-aos="fadeRight" data-aos-delay="100">
            <a href="/works">{t("home.view")}</a>
          </p>
        </Col>
      </Row>
      {
        Data.slice(0, 3).map((item) => <WorkCard info={item} />)
      }
    </Container>
  );
}

export default FeaturedWork;
