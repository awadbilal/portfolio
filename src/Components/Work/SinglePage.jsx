import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiShareCircleLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import './style.css';

function SinglePage({ info }) {
  const { t } = useTranslation();

  return (
    <Container className='singlePage'>
      <Row className='title row-eq-height align-items-center pt-4 pb-2' md={12}>
        <Col xs={9} sm={9} md={9} lg={9}>
          <h1 data-aos='fade-right'>{info.title}</h1>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <p data-aos='fade-left'>
            <a href={info.link} target='_blank' rel='noreferrer'>
              <RiShareCircleLine size='2.5rem' />
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <h6 className='pt-2 pb-3'>
          <span className='date' data-aos='fade-right'>
            {info.date}
          </span>
          <span className='languages' data-aos='fade-right'>
            {info.languages}
          </span>
        </h6>
      </Row>
      <Row className='pt-2 pb-4'>
        <p data-aos='fade-right'>{info.description}</p>
      </Row>
      <Row>
        <h4 data-aos='fade-right'>{t('work.functionalities')}</h4>
      </Row>
      <Row className='pt-2 pb-4'>
        {info.functionalities.map((item, i) => {
          return (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              data-aos='fade-up'
              key={`fun` + i}
            >
              <p>
                <BsArrowReturnRight size='1.2rem' /> {item}
              </p>
            </Col>
          );
        })}
      </Row>
      <Row>
        <h4 data-aos='fade-right'>{t('work.technologies')}</h4>
      </Row>
      <Row className='pt-2 pb-4'>
        {info.technologies.map((item, i) => {
          return (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              data-aos='fade-up'
              key={`tech` + i}
            >
              <p>
                <BsArrowReturnRight size='1.2rem' /> {item}
              </p>
            </Col>
          );
        })}
      </Row>
      {info.gif && (
        <Row>
          <img data-aos='fade-up' src={info.gif} alt={info.title} />
        </Row>
      )}

      {info.imageGroup ? (
        <Row className='pt-5 d-flex'>
          {info.imageGroup.map((item, i) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={`${
                  i !== info.imageGroup.length - 2 ? 'pb-5' : 'pb-0'
                } pr-5`}
                key={`extraImage` + i}
              >
                <img
                  data-aos='fade-up'
                  src={item}
                  alt={item}
                  className='borderImg'
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
}

export default SinglePage;
