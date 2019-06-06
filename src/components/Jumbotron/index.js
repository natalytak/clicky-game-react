import React from "react";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Clicky Game React!</h1>
      <h3>Click on an image to earn points, but don't click on any more than once!</h3>
    </div>
  );
}

export default Jumbotron;
