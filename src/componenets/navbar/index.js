import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="home">
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <a href="">Services </a>
          </li>
          <li>
            <a href="">Works </a>
          </li>
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Services </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
