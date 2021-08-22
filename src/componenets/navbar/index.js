import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
function Navbar() {
  return (
    <Fade left delay={300}>
      <nav id="main-nav">
        <ul id="ul-desktop">
          <li className="li-desktop">
            <Link
              className="link"
              spy={true}
              duration={200}
              smooth={true}
              to="home"
            >
              Home
            </Link>
          </li>
          <li className="li-desktop">
            <Link
              className="link"
              spy={true}
              duration={200}
              smooth={true}
              to="services"
            >
              Services
            </Link>
          </li>
          <li className="li-desktop">
            <Link
              to="works"
              className="link"
              spy={true}
              duration={200}
              smooth={true}
            >
              Works
            </Link>
          </li>
          <li className="li-desktop">
            <Link
              to="about"
              className="link"
              spy={true}
              duration={200}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="li-desktop">
            <Link
              to="contact"
              className="link"
              spy={true}
              duration={200}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fade>
  );
}

export default Navbar;
