import React from "react";
import { Link } from "react-router-dom";
import Pro1 from "../../Images/ProfilePic/inline_image_preview.png";
import "./about.css";
function About() {
  return (
    <section id="about">
      <div id="pro-box">
        <div id="pro-card">
          <img src={Pro1} alt="Howard" />
          <div id="pro-text-info">
            <h2>Esther Howard</h2>
            <h5>Software Engineer</h5>
            <p>lorem ipsum o in dastanaaa</p>
          </div>
        </div>
        <div id="pro-card">
          <img src={Pro1} alt="Howard" />
          <div id="pro-text-info">
            <h2>Esther Howard</h2>
            <h5>Software Engineer</h5>
            <p>lorem ipsum o in dastanaaa</p>
          </div>
        </div>
        <div id="pro-card">
          <img src={Pro1} alt="Howard" />
          <div id="pro-text-info">
            <h2>Esther Howard</h2>
            <h5>Software Engineer</h5>
            <p>lorem ipsum o in dastanaaa</p>
          </div>
        </div>
      </div>
      <Link to="/sunshine2/about">
        <button id="btn-about">See More</button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}
export default About;
