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

  componentDidMount() {
    console.log(this.state.isClicked)
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.isClicked)
  }
  

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
    const img = this.state.images.find(image => image.id === id);
    console.log(img.id);
    const { score } = this.state;
    const { isClicked } = this.state;
    console.log("Before click status: "+isClicked);
    if (score < 12) {
    const images = this.state.images.map(image => {
    if (img.id === id && this.state.isClicked === false) {
      this.setState({ 
        isClicked: true,
        score: this.state.score + 1,
        message: "You won!",
      });
      console.log("After click if CORRECT: "+this.state.isClicked+" id:" + img.id)
    } else if (img.id === id && this.state.isClicked === true) {
      this.setState({ 
        score: 0,
        message: "You lost! Try again."
      });
      const images = this.state.images.map(image => {
        this.setState({ 
          isClicked: false
        });
      });
      console.log(score);
    }
    // this.setState({ 
    //       isClicked: false
    //     });
        console.log("After click state if WRONG: "+this.state.isClicked+" id:" + img.id);
    // this.setState({ images }, () => this.shuffle());
    return image
  });
  this.setState({ img }, () => this.shuffle());
} else {
  this.setState({ message: "Great job! You won this round!"})
  this.setState({ score: 0})
  // const images = this.state.images.map(image => {
  //   image.clicked = false;
  // })
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
