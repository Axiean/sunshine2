import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import { Link as LinkR } from "react-router-dom";
import { Button, ArrowForward, ArrowRight } from "../ButtonElement";
import { Fade, Zoom, Flip } from "react-reveal";

import "./header.css";
import { fadeInDown } from "react-animations";

function Header() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  // ----------------------------------------------------------------------------------

  return (
    <header id="home">
      {/* --------------------------- */}

      <div id="logo">
        <Fade top>
          <img src={Logo} alt="sunshine" />
        </Fade>
        <Fade bottom>
          <h1>SUNSHINE Agency</h1>
        </Fade>
      </div>
      <Fade cascade right duration={900} delay={500}>
        <p id="header-about">
          Quickly design and customize responsive mobile-first sites with
          Mehrban, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins...
        </p>
      </Fade>
      <Flip bottom delay={1000}>
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
              <ArrowForward id="icon-arrow-f-mobile" />
            </Button>
          </LinkR>
        </div>
      </Flip>
      <div style={{ clear: "both", float: "none" }}></div>
    </header>
  );
}
export default Header;
