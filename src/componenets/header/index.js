import React from "react";
import Logo from "../../Images/logo.png";
import "./header.css";
function Header() {
  return (
    <header id="home">
      <div id="logo">
        <img src={Logo} alt="sunshine" />
        <h1>SUNSHINE Agency</h1>
      </div>
      <div id="btns">
        <button id="btn-h-2">Read More</button>
        <button id="btn-h-1">Watch Video</button>
      </div>
      <div style={{ clear: "both", float: "none" }}></div>
    </header>
  );
}
export default Header;
