import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Data from './languages';
import './style.css';

function Skills() {

  const { t } = useTranslation();
  const [showItems, setShowItems] = useState(8);
  const [shown, setShown] = useState(false)

  const items = Data.slice(0, showItems).map((item) => {
    return ( 
      <Col xs={6} sm={6} md={3} lg={3} key={item.title} className="text-center">
        { item.icon }
        <Row><p className='text-center pt-3'>{ item.title }</p></Row>
      </Col>
    );
  });

  const handleShow = () => {
    setShowItems(
      showItems >= Data.length ? 8 : Data.length
    );
    setShown(!shown);
  }

  return (
    <div className='skillsSection pt-3 pb-4'>
      <Container>
        <Row className="title row-eq-height" md={12}>
          <Col xs={9} sm={9} md={9} lg={9}><h4>{t('home.skills')}</h4></Col>
          <Col xs={3} sm={3} md={3} lg={3}><p onClick={handleShow}>{ shown ? t('home.hide') : t('home.view')}</p></Col>
        </Row>
        <Row className="row-eq-height mt-2">
          { items }
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
