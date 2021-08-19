import React, { useState } from "react";
import { reveal as Menu } from "react-burger-menu";
import { Link as LinkS } from "react-scroll";
import Close from "../../Images/close.png";
import Logo from "../../Images/logo.png";
import Menuu from "../../Images/Menu.svg";
import "./testmenu.css";

function TestMenu() {
  const [show, setShow] = useState(true);

  // copied this part from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  //   var prevScrollpos = window.pageYOffset;
  //   // if (document.getElementById("hamburger")) {
  //   // i added if , bcuz when i chnaged to path='abouts' i had a "style : null" error
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;

  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("mobile-nav").style.top = "0";
  //     } else if (show) {
  //       document.getElementById("mobile-nav").style.top = "-70px";
  //       // document.getElementById("hamburger").style.top = "-70px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };

  const clickHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <Menu
        noTransition
        noOverlay
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
        id="ham-menu"
        width={"50%"}
        isOpen={show ? "ture" : "false"}
      >
        {/* <img id="close-btn" src={Close} onClick={clickHandler} /> */}
        <ul id="page-wrap">
          <li className="li-mobile">
            <a
              onClick={clickHandler}
              className="LinkS"
              spy={true}
              duration={200}
              smooth={true}
              to="home"
            >
              Home
            </a>
          </li>
        </ul>
      </Menu>
    </div>
  );
}

export default TestMenu;
