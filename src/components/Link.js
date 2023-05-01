import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/header.css';

const Link = (props) => {
  const { link } = props;
  return (
    <Container className="neon-container">
      <Row>
        <Col>
          <h1 className="text-center mb-2 neon-title">Información de la Película</h1>
          <Card className="neon-card">
            <Card.Body>
              <Card.Title className="display-1">{link.nombre}</Card.Title>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Género:</strong> {link.genero}</ListGroup.Item>
                  <ListGroup.Item><strong>Estudio:</strong> {link.estudio}</ListGroup.Item>
                  <ListGroup.Item><strong>Duración:</strong> {link.duracion}</ListGroup.Item>
                  <ListGroup.Item><strong>Recaudación:</strong> {link.recaudacion}</ListGroup.Item>
                  <ListGroup.Item><strong>Productor:</strong> {link.productor}</ListGroup.Item>
                  <ListGroup.Item><strong>Valoración:</strong> {link.valoracion}</ListGroup.Item>
                  <ListGroup.Item><strong>Servicio:</strong> {link.servicio}</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Link;