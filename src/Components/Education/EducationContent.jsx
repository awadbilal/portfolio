import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import EducationCard from "./EducationCard";
import Data from "./educationList";

function EducationContent() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <h1 data-aos="fade-right">{t("education.header")}</h1>
      </Row>
      {Data.map((item) => (
        <EducationCard info={item} />
      ))}
    </Container>
  );
}

export default EducationContent;
