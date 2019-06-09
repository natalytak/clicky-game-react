import React from "react";

function Instructions() {
  return (
    <div
      style={{ minHeight: 80, paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      <h3 style={{fontSize: "1.2em"}}>~Click on an image to earn points.~</h3>
      <h3 style={{fontSize: "1.2em"}}>~If you click on an image more than once - the game will restart.~</h3>
      <h3 style={{fontSize: "1.2em"}}>~See if you can get your score up to 12!~</h3>
    </div>
  );
}

export default Instructions;
