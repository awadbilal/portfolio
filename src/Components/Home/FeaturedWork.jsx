import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkCard from '../Work/WorkCard';
import { useTranslation } from 'react-i18next';
import './style.css';

function FeaturedWork() {

  const { t } = useTranslation();

  return (
    <Container className="featuredWork pt-3">
      <Row className="title row-eq-height align-items-center" md={12}>
        <Col xs={9} sm={9} md={9} lg={9}><h4 data-aos="fadeLeft">{t('home.featured')}</h4></Col>
        <Col xs={3} sm={3} md={3} lg={3}><p data-aos="fadeRight">{t('home.view')}</p></Col>
      </Row>
      <WorkCard />
    </Container>
  );
}

export default FeaturedWork;
