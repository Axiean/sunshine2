import React from "react";
import { Link } from "react-router-dom";
import Pro1 from "../../Images/ProfilePic/inline_image_preview.png";
import Pro2 from "../../Images/ProfilePic/pro1.png";
import Pro3 from "../../Images/ProfilePic/pro2.png";
import { Button } from "../ButtonElement";
import "./about.css";
function About() {
  return (
    <section id="about">
      <h2 id="about-title">Our Community</h2>
      <div id="pro-box">
        <div id="pro-card">
          <img src={Pro2} alt="Howard" />
          <div id="pro-text-info">
            <h2>Nesilla Amiga</h2>
            <h5>Product Designer</h5>
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
          <img src={Pro3} alt="Howard" />
          <div id="pro-text-info">
            <h2>Esther Howard</h2>
            <h5>Software Engineer</h5>
            <p>lorem ipsum o in dastanaaa</p>
          </div>
        </div>
      </div>
      <Link to="/sunshine2/about">
        <Button outline id="btn-about">
          See More
        </Button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}
export default About;
