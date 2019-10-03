import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navBG}>
            <a className="navbar-brand" href="/" style={titleStyle}>
              Clicky Game
            </a>
            <p style={scoreStyle}>Score: {props.score} | Top Score: {props.topScore}</p>
            <p style={messageStyle}>{props.message}</p>
    </nav>
    
  );
}

const navBG = {
  backgroundColor: '#807860',
};
const titleStyle = {
  fontFamily: 'Righteous',
  fontSize: '3rem', 
  textDecoration: 'none',
  display: "inline",
  width: "33.3%",
  verticalAlign: "middle",
  textAlign: "center",
};

const messageStyle = {
  fontFamily: 'Courgette',
  display: "inline",
  width: "33.3%",
  verticalAlign: "middle",
  textAlign: "center",
  fontSize: "1.5rem",
  color: "gold"
}

const scoreStyle = {
  fontFamily: 'Courgette',
    display: "inline",
    width: "33.3%",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "1.2rem"
}

export default NavBar;
