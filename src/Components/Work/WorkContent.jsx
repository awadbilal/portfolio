import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import WorkCard from './WorkCard';
import Data from './workList';

function WorkContent() {

  const { t } = useTranslation();

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <h1 data-aos="fade-right">
          {t('work.header')}
        </h1>
      </Row>
      {
        Data.map((item) => <WorkCard info={item} />)
      }
    </Container>
  );
}

export default WorkContent;
