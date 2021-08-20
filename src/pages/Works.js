import React from "react";
import { motion } from "framer-motion";
import Navbar from "../componenets/navbar";
import HamMenu from "../componenets/hamburger menu";
import { ArrowLeft, Button } from "../componenets/ButtonElement";
import { Link } from "react-router-dom";
import Brand1 from "../Images/Brands/Frame 1 (1).png";
import Brand2 from "../Images/Brands/Frame 2 (1).png";
import Brand3 from "../Images/Brands/Frame 3.png";
import Brand4 from "../Images/Brands/Frame 4.png";
import { BrandPic, BrandsBox } from "../componenets/brandsBox";
function WorksP() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HamMenu />
      <Link to="/">
        <Button top backBTN>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>

      <BrandsBox>
        <BrandPic className="brand-img" src={Brand1} alt="brandss" />
        <BrandPic className="brand-img" src={Brand2} alt="brandss" />
        <BrandPic className="brand-img" src={Brand3} alt="brandss" />
        <BrandPic className="brand-img" src={Brand4} alt="brandss" />
        <BrandPic className="brand-img" src={Brand3} alt="brandss" />
        <BrandPic className="brand-img" src={Brand4} alt="brandss" />
        <BrandPic className="brand-img" src={Brand1} alt="brandss" />
        <BrandPic className="brand-img" src={Brand2} alt="brandss" />
      </BrandsBox>
    </motion.div>
  );
}

export default WorksP;
