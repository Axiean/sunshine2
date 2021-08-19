import React, { useState } from "react";
import Menu from "../../Images/Menu.svg";
import { Link as LinkS } from "react-scroll";
import Close from "../../Images/close.png";
import Logo from "../../Images/logo.png";
import { Sling as Hamburger } from "hamburger-react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import "./hamMenu.css";

function HamMenu() {
  const [show, setShow] = useState(false);

  // copied this part from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  var prevScrollpos = window.pageYOffset;
  // if (document.getElementById("hamburger")) {
  // i added if , bcuz when i chnaged to path='abouts' i had a "style : null" error
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("exrta-part-menu").style.top = "0px";
    } else {
      document.getElementById("exrta-part-menu").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };
  const clickHandler = () => {
    setShow(!show);
    preventScrollOnHamburger();
  };
  const preventScrollOnHamburger = () => {
    if (!show) {
      disableBodyScroll(document.getElementById("exrta-part-menu"));
      document.getElementById("hamburger").style.overflowY = "scroll";
    } else {
      enableBodyScroll(document.getElementById("exrta-part-menu"));
      document.getElementById("hamburger").style.overflowY = "visible";
    }
  };
  return (
    <>
      {/* i removed this part!!!!!!!!!!!!! */}
      {/* ----------------------------------------- */}
      {/* <div id="mobile-nav" style={{ opacity: show ? 1 : 0 }}>
        <img
          onClick={clickHandler}
          src={Menu}
          id="menu"
          style={{ visibility: show ? null : "hidden" }}
        />

        <LinkS to="home">
          <div id="hamburger-logo" style={{ opacity: show ? 0 : 1 }}>
            <img src={Logo} alt="sunshine" />
            <h1>SUNSHINE Agency</h1>
          </div>
        </LinkS>
      </div> */}
      {/* ----------------------------------------- */}

      <section
        onClick={clickHandler}
        id="black-screen"
        style={{
          transform: show ? " translateY(0)" : " translatex(100%)",
        }}
      >
        <div
          id="hamburger"
          style={{
            transform: show ? " translatex(0)" : " translatex(-100%)",
          }}
        >
          <div
            onClick={clickHandler}
            id="exrta-part-menu"
            style={{
              right: show ? "0" : "60px",
            }}
          >
            <Hamburger duration={0.9} toggled={show} toggle={setShow} />
          </div>
          {/* <Hamburger toggled={show} toggle={setShow} /> */}
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
          <LinkS to="home">
            <div id="hamburger-interior-logo">
              <img src={Logo} alt="sunshine" />
              <h1>SUNSHINE Agency</h1>
            </div>
          </LinkS>
        </div>
      </section>
    </>
  );
}

export default HamMenu;
