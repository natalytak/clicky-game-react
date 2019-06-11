import React from "react";
import { Col, Row, Container } from "../Grid";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <Container>
        <Row>
          <Col size="sm-4">
            <a className="navbar-brand" href="/" style={titleStyle}>
              Clicky Game
            </a>
          </Col>
          <Col size="sm-4">
            <p style={scoreStyle}>Score: {props.score} | Top Score: {props.topScore}</p>
          </Col>
          <Col size="sm-4">
            <p style={messageStyle}>{props.message}</p>
          </Col>
      </Row>
    </Container>
    </nav>
    
  );
}
const titleStyle = {
  fontSize: '2rem', 
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
  fontSize: "1.2rem",
  color: "gold"
}

const scoreStyle = {
    display: "inline",
    width: "33.3%",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "1.2rem"
}

export default NavBar;
