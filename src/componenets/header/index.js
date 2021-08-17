import React from "react";
import Logo from "../../Images/logo.png";
import Menu from "../../Images/Menu.svg";
import "./header.css";
function Header() {
  return (
    <header id="home">
      <img src={Menu} id="menu" />
      <div id="logo">
        <img src={Logo} alt="sunshine" />
        <h1>SUNSHINE Agency</h1>
      </div>
      <p id="header-about">
        Quickly design and customize responsive mobile-first sites with Mehrban,
        the world’s most popular front-end open source toolkit, featuring Sass
        variables and mixins, responsive grid system, extensive prebuilt
        components, and powerful JavaScript plugins...
      </p>
      <div id="btns">
        <button id="btn-h-2">Read More</button>
        <button id="btn-h-1">Watch Video</button>
      </div>
      <div style={{ clear: "both", float: "none" }}></div>
    </header>
  );
}
export default Header;
