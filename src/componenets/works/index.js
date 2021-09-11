import React from "react";
import Brand1 from "../../Images/Brands/Frame 1 (1).png";
import Brand2 from "../../Images/Brands/Frame 2 (1).png";
import Brand3 from "../../Images/Brands/Frame 3.png";
import Brand4 from "../../Images/Brands/Frame 4.png";
import Line from "../../Images/Brands/line.png";
import { Fade } from "react-reveal";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import "./works.css";
import { Link } from "react-router-dom";
function Works() {
  return (
    <section id="works">
      <div id="brands-box">
        <h2 id="box-title">Work with</h2>
        <div id="brands-iterior-box">
          <Fade delay={500}>
            {" "}
            <img className="brand-img" src={Brand1} alt="brandss" />{" "}
          </Fade>
          <Fade delay={600}>
            {" "}
            <img className="brand-img" src={Brand2} alt="brandss" />{" "}
          </Fade>
          <Fade delay={700}>
            {" "}
            <img className="brand-img" src={Brand3} alt="brandss" />{" "}
          </Fade>
          <Fade delay={800}>
            {" "}
            <img className="brand-img" src={Brand4} alt="brandss" />{" "}
          </Fade>
        </div>
        <img src={Line} id="box-line" />
      </div>

      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div id="works-static">
            {isVisible ? (
              <div className="static-card">
                <h2>
                  <Fade bottom>
                    <CountUp duration={1} start={0} end={13} />
                  </Fade>
                </h2>
                <h3>Customers</h3>
              </div>
            ) : null}
            {isVisible ? (
              <div className="static-card">
                <h2>
                  <Fade bottom>
                    {" "}
                    <CountUp duration={1} end={4} />{" "}
                  </Fade>
                </h2>
                <h3>Blog</h3>
              </div>
            ) : null}
            {isVisible ? (
              <div className="static-card">
                <h2>
                  <Fade bottom>
                    {" "}
                    <CountUp duration={1} end={23} />{" "}
                  </Fade>
                </h2>
                <h3>Services</h3>
              </div>
            ) : null}
          </div>
        )}
      </TrackVisibility>
      <Link to="/sunshine2/works">
        <button id="btn-work">See More</button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}

export default Works;
