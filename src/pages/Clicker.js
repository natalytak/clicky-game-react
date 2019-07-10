import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Instructions from "../components/Instructions";
import { Row, Container } from "../components/Grid";
import images from "../images/images.json";

export class Clicker extends Component {
  state = {
    images,
    score: 0,
    topScore: 12,
    message: "Click on an image to start!",
    isClicked: false,
  };

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  shuffle = () => {
    const { images } = this.state;
    const shuffled = this.shuffleArray([...images]);
    this.setState({ images: shuffled });
  }


  checkClickedImage = id => {
    const { score } = this.state;
    if (score < 12) {
    const images = this.state.images.map(image => {
    if (image.id === id && image.isClicked === false) {
      this.setState({ 
        score: this.state.score + 1,
        message: "You won!",
      });
      image.isClicked = true;
    } else if (image.id === id && image.isClicked === true) {
      this.setState({ 
        score: 0,
        message: "You lost! Try again."
      });
      image.isClicked = false;
      const resetImages = this.state.images.map(image => {
        image.isClicked = false;
      });
    }
    return image
  });
  this.setState({ images }, () => this.shuffle());
} else {
  this.setState({ 
    message: "Great job! You won this round!",
    score: 0
  })
}
  }


  render() {
    console.log(`RENDER`)
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Instructions />
        <Container>
          <Row>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                imgUrl={image.imgUrl}
                checkClickedImage={this.checkClickedImage}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Clicker;
