import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Billy from '../../locales/images/transparent.png';
import CV from '../../locales/CV.pdf';
import './style.css';

const HeroSection = () => {

  const { t } = useTranslation();

  return (
    <Container className="heroSection">
      <Row>
        <Col md={7}>
          <h1 data-aos="fade-right">{t('home.name')}</h1>
          <h1 data-aos="fade-right">{t('home.title')}</h1>
          <br />
          <p data-aos="fade-right">{t('home.cover')}</p>
          <br /><br />
          <div className='m-0 p-0' data-aos="fade-right">
            <a className="downloadRes" href={CV} download="Bilal Avvad - CV">
              {t('home.downloadRes')}
            </a>
          </div>
        </Col>
        <Col md={5}>
          <div className='imageDiv'>
            <img data-aos="fade-left" data-aos-delay="150" src={Billy} alt="Bilal Avvad" />
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default HeroSection;