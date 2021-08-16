import React from "react";
import Bg1 from "../../Images/Polygon.png";
import Bg2 from "../../Images/Polygon 2.png";
import Bg3 from "../../Images/Polygon 2 (1).png";
import "./bg.css";
function Bg() {
  return (
    <div id="bg">
      <img
        className="back-img"
        style={{ position: "absolute", left: "0", top: "0" }}
        src={Bg2}
      />
      <img
        className="back-img"
        style={{ position: "absolute", top: "1225px", right: "0" }}
        src={Bg3}
      />
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
