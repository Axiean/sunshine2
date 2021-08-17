import React from "react";
import "./footer.css";
import Brandpic from "../../Images/Group 164.png";
import Bg1 from "../../Images/Polygon.png";

function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <h2>Get In Touch</h2>
        <div className="footer-row">
          <img src={Brandpic} alt="" />
          <h3>Asen.Store</h3>
        </div>
        <div className="footer-row">
          <img src={Brandpic} alt="" />
          <h3>Asen.Store</h3>
        </div>
      </div>
      <div className="footer-col">
        <h2>Social Media</h2>
        <div className="footer-row">
          <img src={Brandpic} alt="" />
          <h3>Asen.Store</h3>
        </div>
        <div className="footer-row">
          <img src={Brandpic} alt="" />
          <h3>Asen.Store</h3>
        </div>
      </div>
      <div className="footer-col">
        <h2>Location</h2>
        <div className="footer-row">
          <img src={Brandpic} alt="" />
          <h3>Unit 3, Floor 1, No 559, New york, USA</h3>
        </div>
      </div>
      <img
        id="bg1"
        src={Bg1}
        style={{
          zIndex: "-99",
          position: "absolute",
          left: "0",
          bottom: "0",
        }}
      />
    </footer>
  );
}

export default Footer;
