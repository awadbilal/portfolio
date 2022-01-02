import React from "react";
import { Navbar, Container, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import './style.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer" data-aos="fade-top" data-aos-delay="350">
      <Navbar className='footerNav' collapseOnSelect>
        <Container className='justify-content-center' expand="lg">
          <a href="https://www.linkedin.com/in/bilal-avvad/" target="_blank">
            <FaLinkedin size="3rem" color="#21243D" />
          </a>
          <a href="https://github.com/awadbilal" target="_blank">
            <FaGithub size="3rem" color="#21243D" className="ms-4 me-2" />
          </a>
          <a href="mailto:awadbilal99@gmail.com">
            <FaGoogle size="3rem" color="#21243D" className="ms-2 me-4"/>
          </a>
          <a href="https://www.instagram.com/awadbilal/" target="_blank">
            <FaInstagram size="3rem" color="#21243D" />
          </a>
          <br />
        </Container>
      </Navbar>
      <Row>
        <h5>{t("copyright")}</h5>
      </Row>
    </div>
  );
}

export default Footer;
