import React from "react";
import { Col, Row, Container } from "../Grid";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <Container fluid>
        <Row>
          <Col size="md-4">
            <a className="navbar-brand" href="/" style={{ fontSize: '2em', textDecoration: 'none' }}>
              Clicky Game
            </a>
          </Col>
          <Col size="md-4">
            <h3>Click an image to begin!</h3>
          </Col>
          <Col size="md-4">
            <h3>Score: {props.score}</h3>
            <h3>Top Score: {props.topScore}</h3>
          </Col>
      </Row>
    </Container>
    </nav>
    
  );
}

export default NavBar;
