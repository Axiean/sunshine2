import React from "react";
import HamMenu from "../componenets/hamburger menu";
import { Srv_container } from "../componenets/serviceContainer";
import { motion } from "framer-motion";
import { ArrowLeft, Button } from "../componenets/ButtonElement";
import { BrandImgOnBox } from "../componenets/styledComponents/worksBrandsElements";
import { Link } from "react-router-dom";
import BrandsData from "../Data/brandsData";
function WorksBrands(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HamMenu />
      <Link to="/sunshine2/works">
        <Button top backBTN>
          <ArrowLeft />
          Back
        </Button>
      </Link>

      <div style={{ clear: "both", float: "none" }}></div>

      <Srv_container>
        <BrandImgOnBox src={props.location.state.info[0]} />
        <BrandsData firstPa="" />
        <button onClick={() => console.log(props.location.state.info[1])}>
          hii
        </button>
      </Srv_container>
    </motion.div>
  );
}

export default WorksBrands;
