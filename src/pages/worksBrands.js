import React from "react";
import HamMenu from "../componenets/hamburger menu";

function WorksBrands(props) {
  return (
    <div>
      <HamMenu />

      <img src={props.location.state.info} />
    </div>
  );
}

export default WorksBrands;
