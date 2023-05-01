import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white center">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Dirección: Mariano Escobedo, Veracruz, Av.Orizaba entre Guadalupe Victoria y Fracisco Villa</p>
            <p>Teléfono: (272) 206-3139</p>
            <p>Correo electrónico: rodrigomencias08@gmail.com</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
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