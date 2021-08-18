import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import Menu from "../../Images/Menu.svg";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Close from "../../Images/close.png";
import { Button, ArrowForward, ArrowRight } from "../ButtonElement";
import "./header.css";
function Header() {
  const [show, setShow] = useState(true);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  // copied this part from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  var prevScrollpos = window.pageYOffset;
  // if (document.getElementById("hamburger")) {
  // i added if , bcuz when i chnaged to path='abouts' i had a "style : null" error
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("hamburger").style.top = "0";
    } else if (show) {
      document.getElementById("hamburger").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };
  // }

  // ----------------------------------------------------------------------------------
  const clickHandler = () => {
    setShow(!show);
  };
  return (
    <header id="home">
      <div
        id="hamburger"
        style={{
          transform: show ? " translateY(-85%)" : " translateY(0)",
        }}
      >
        <LinkS to="home">
          <div id="hamburger-logo" style={{ opacity: show ? 1 : 0 }}>
            <img src={Logo} alt="sunshine" />
            <h1>SUNSHINE Agency</h1>
          </div>
        </LinkS>

        <img
          onClick={clickHandler}
          src={Menu}
          id="menu"
          style={{ visibility: show ? null : "hidden" }}
        />
        <img id="close-btn" src={Close} onClick={clickHandler} />
        <ul id="ul-mobile">
          <li className="li-mobile">
            <LinkS
              onClick={clickHandler}
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
              to="home"
            >
              Home
            </LinkS>
          </li>
          <li className="li-mobile">
            <LinkS
              onClick={clickHandler}
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
              to="services"
            >
              Services
            </LinkS>
          </li>
          <li className="li-mobile">
            <LinkS
              onClick={clickHandler}
              to="works"
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
            >
              Works
            </LinkS>
          </li>
          <li className="li-mobile">
            <LinkS
              onClick={clickHandler}
              to="about"
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
            >
              About
            </LinkS>
          </li>
          <li className="li-mobile">
            <LinkS
              onClick={clickHandler}
              to="contact"
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
            >
              Contact
            </LinkS>
          </li>
        </ul>
      </div>

      {/*  --------------------------- */}
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
        <Button wideBTN="t" id="btn-h-1">
          Watch Video
        </Button>
        <LinkR to="abouts">
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            outline="t"
            wideBTN="t"
            id="btn-h-2"
          >
            Read More{" "}
            {hover ? (
              <ArrowForward id="icon-arrow-f" />
            ) : (
              <ArrowRight id="icon-arrow-r" />
            )}
          </Button>
        </LinkR>
      </div>
      <div style={{ clear: "both", float: "none" }}></div>
    </header>
  );
}
export default Header;
