import React from "react";
import Bg1 from "../../Images/Polygon.png";
import Bg2 from "../../Images/Polygon 2.png";
import Bg3 from "../../Images/Polygon 2 (1).png";
import "./bg.css";
function Bg() {
  return (
    <div id="bg">
      <img id="bg2" className="back-img" src={Bg2} />
      <img id="bg3" className="back-img" src={Bg3} />
      {/* <img
        className="back-img"
        style={{
          position: "absolute",
          left: "0",
          top: "266.667vw",
        }}
        src={Bg1}
      /> */}
    </div>
  );
}

export default Bg;
