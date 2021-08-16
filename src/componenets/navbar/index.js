import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
    </>
  );
}

export default Navbar;
