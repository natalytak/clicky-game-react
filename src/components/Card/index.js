import React from "react";

// import images from "../../images/images.json";

function Card(props) {
  return (
    <img style={imgCSS} 
    src={require("../../images/" + props.imgUrl)}
    alt={props.imgUrl}
        className="img-fluid img-thumbnail"
        onClick={() => props.guessImage(props.id)}
    />
  );
};
const imgCSS = {
  maxHeight: "180px",
  maxWidth: "180px",
  margin: "20px",
  border: "5px solid gold"
};

export default Card;
