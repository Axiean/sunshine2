import React from "react";
import Software from "../../Images/Services/Ellipse 2 (1).png";
import Network from "../../Images/Services/Ellipse 3 (5).png";
import Marketing from "../../Images/Services/Ellipse 3 (6).png";
import ProductDesign from "../../Images/Services/Ellipse 6 (1).png";
import VideoSolution from "../../Images/Services/Ellipse 7 (2).png";
import Wordpress from "../../Images/Services/Ellipse 7 (3).png";
import { Link as LinkR } from "react-router-dom";
import { Data } from "./Data";

import "./services.css";

function Services() {
  return (
    <section id="services">
      <div id="srv-container">
        <Data
          img={Software}
          name="Software"
          des="Lorem ipsum dolor sit amet "
        />
        <Data
          img={Marketing}
          name="Marketing"
          des="Lorem ipsum dolor sit amet "
        />
        <Data img={Network} name="Software" des="Lorem ipsum dolor sit amet " />
        <Data
          img={ProductDesign}
          name="Product Design"
          des="Lorem ipsum dolor sit amet "
        />
        <Data
          img={VideoSolution}
          name="Video Solution"
          des="Lorem ipsum dolor sit amet"
        />
        <Data
          img={Wordpress}
          name="Wordpress"
          des="Lorem ipsum dolor sit amet "
        />
      </div>
      <LinkR to="/sunshine2/services">
        <button id="btn-srv">See More </button>
      </LinkR>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}

export default Services;
