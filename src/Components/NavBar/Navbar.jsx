import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";
import { useTranslation } from "react-i18next";

function NavBar() {
  
  const { t } = useTranslation();
  // const { t, i18n } = useTranslation();

  // const changeLanguage = () => {
  //   if (i18n.language === "en") i18n.changeLanguage("ar");
  //   else i18n.changeLanguage("en");
  // };

  return (
    <>
      <Navbar className="navBarSection mt-3" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-3 pb-3">
              <Nav.Link eventKey={1}>
                <Link to="/">{t("nav.home")}</Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={2}>
                <Link to="/works">{t("nav.works")}</Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={3}>
                <Link to="/education">{t("nav.education")}</Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={4}>
                <Link to="/contact">{t("nav.contact")}</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <div className="languageButton" onClick={changeLanguage}>
            {i18n.language === "en" ? "AR" : "EN"}
          </div> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
