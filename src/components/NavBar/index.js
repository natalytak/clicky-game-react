import React from "react";
import { Col, Row, Container } from "../Grid";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <Container>
        <Row>
          <Col size="md-4">
            <a className="navbar-brand" href="/" style={titleStyle}>
              Clicky Game
            </a>
          </Col>
          <Col size="md-4">
            <h3 style={messageStyle}>{props.message}</h3>
          </Col>
          <Col size="md-4">
            <h3 style={scoreStyle}>Score: {props.score} | Top Score: {props.topScore}</h3>
          </Col>
      </Row>
    </Container>
    </nav>
    
  );
}
const titleStyle = {
  fontSize: '2em', 
  textDecoration: 'none',
  display: "inline",
  width: "33.3%",
  verticalAlign: "middle",
  textAlign: "center",
};

const messageStyle = {
  display: "inline",
  width: "33.3%",
  verticalAlign: "middle",
  textAlign: "center",
  fontSize: "1.2em"
}

const scoreStyle = {
    display: "inline",
    width: "33.3%",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "1.2em"
}

export default NavBar;
