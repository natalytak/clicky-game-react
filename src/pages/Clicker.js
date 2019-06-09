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
    topScore: 0,
    message: "Click on an image to start!",
    isClicked: false
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
    console.log(score);

    this.setState({ images }, () => this.shuffle());
    if (images.id === this.id && this.state.isClicked === false) {
      this.setState({ 
        isClicked: true
      });
      // images.clicked = true
      // score = this.state.score + 1
      this.setState({ 
        score: this.state.score + 1,
        message: "You won!"
      })
      
    } else if (images.id === this.id && this.state.isClicked === true) {
      this.setState({ 
        score: 0,
        message: "You lost! Try again.",
        isClicked: false
      });
      // const images = this.state.images.map(image => {
      //   this.setState({ 
      //     isClicked: false
      //   });
      // });
      console.log(score);
      console.log(this.state.isClicked)
    }
    // this.setState({ images }, () => this.shuffle());
    return images
  // });
  };
  
  render() {
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
