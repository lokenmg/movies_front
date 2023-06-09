import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark text-white center">
      <Container>
        <Row>
          <Col md={6}>
            <h5>{t("contact_information")}</h5>
            <p>{t("address")}: Mariano Escobedo, Veracruz, Av.Orizaba entre Guadalupe Victoria y Fracisco Villa</p>
            <p>{t("phone")}: (272) 206-3139</p>
            <p>{t("email")}: rodrigomencias08@gmail.com</p>
          </Col>
          <Col md={6}>
            <h5>Linksw</h5>
            <ul className="list-unstyled">
              <li><a href="/">Inicio</a></li>
              <li><a href="https://www.facebook.com/rodrigo.mencias.73/">Facebook</a></li>
              <li><a href="https://github.com/lokenmg">Github</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 Universidad Veracruzana.</p>
      </Container>
    </footer>
  );
}

export default Footer;