import React from "react";

const Card = props => {
  return (
    <img style={imgCSS} src={require("../../images/" + props.imgUrl)} 
          alt={props.imgUrl}
          className="img-fluid img-thumbnail" 
          onClick={() => {props.checkClickedImage(props.id)}}
    />
  );
};
const imgCSS = {
  border: "5px solid gold",
  cursor: 'pointer',
  maxHeight: "160px",
  maxWidth: "160px",
  margin: "20px"
};

export default Card;
