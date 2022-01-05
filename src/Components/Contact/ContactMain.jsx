import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Socials from "./Socials";
import "./style.css";

function ContactMain() {
  const { t } = useTranslation();

  return (
    <Container className="contactPage">
      <Row className="mt-5 mb-4">
        <h1 data-aos="fade-right" data-aos-delay="50">
          {t("contact.header")}
        </h1>
      </Row>
      <Row>
        <h2 data-aos="fade-up" className="header">
          {t("contact.name")}
        </h2>
      </Row>
      <Row className="row-eq-height" data-aos="fade-up">
        <Col xs={12} sm={12} md={6} lg={6}>
          <Socials />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMain;
