import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import images from "../images/images.json";
// import { List, ListItem } from "../components/List";

export class Clicker extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

  
  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          // message={this.state.message}
        />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                imgUrl={image.imgUrl}
                // guessImage={this.guessImage}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Clicker;
