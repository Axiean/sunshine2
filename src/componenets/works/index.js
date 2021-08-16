import React from "react";
import Brand1 from "../../Images/Brands/Frame 1 (1).png";
import Brand2 from "../../Images/Brands/Frame 2 (1).png";
import Brand3 from "../../Images/Brands/Frame 3.png";
import Brand4 from "../../Images/Brands/Frame 4.png";
import Line from "../../Images/Brands/line.png";
import "./works.css";
function Works() {
  return (
    <section id="works">
      <div id="brands-box">
        <h2 id="box-title">Work with</h2>
        <div id="brands-iterior-box">
          <img className="brand-img" src={Brand1} alt="brandss" />
          <img className="brand-img" src={Brand2} alt="brandss" />
          <img className="brand-img" src={Brand3} alt="brandss" />
          <img className="brand-img" src={Brand4} alt="brandss" />
        </div>
        <img src={Line} id="box-line" />
      </div>
      <div id="works-static">
        <div className="static-card">
          <h2>13</h2>
          <h3>Customers</h3>
        </div>
        <div className="static-card">
          <h2>1</h2>
          <h3>Customers</h3>
        </div>
        <div className="static-card">
          <h2>3</h2>
          <h3>Customers</h3>
        </div>
      </div>
      <button id="btn-work">See More</button>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}

export default Works;
