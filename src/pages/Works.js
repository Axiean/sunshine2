//  ________________________READ COMMENTS____________________

import React, { useState } from "react";
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
function WorksP(props) {
  // by these hooks  and also hoverhandler , i use img alt as a pathname , and i use img src to pass img src to another page , by pivsrc hook
  const [pagename, setPageName] = useState();
  const [picSrc, setPicSrc] = useState();
  const hoverHandler = (e) => {
    setPageName(e.target.alt);
    setPicSrc(e.target.src);
  };
  // this obj aloows me to prevent repeating to="{ pathnam...." on each Link tag
  const objLinkTo = {
    pathname: `/sunshine2/works/${pagename}`,
    state: { info: [picSrc, "kii"] },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HamMenu />
      <Link to="/sunshine2/">
        <Button top backBTN>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>

      <BrandsBox>
        <Link to={objLinkTo}>
          {/* when hover on img , 2 funcs occur in hoverhandler , check hoverhandler func  */}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand1}
            alt="blackboard"
          />
        </Link>
        <Link to={objLinkTo}>
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand2}
            alt="bmd"
          />
        </Link>

        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand3}
            alt="IBM"
          />{" "}
        </Link>
        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand4}
            alt="Lion"
          />{" "}
        </Link>
        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand3}
            alt="Ibm2"
          />{" "}
        </Link>
        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand4}
            alt="Lion2"
          />{" "}
        </Link>
        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand1}
            alt="balck2"
          />{" "}
        </Link>
        <Link to={objLinkTo}>
          {" "}
          <BrandPic
            onMouseEnter={hoverHandler}
            className="brand-img"
            src={Brand2}
            alt="BMD2"
          />{" "}
        </Link>
      </BrandsBox>
    </motion.div>
  );
}

export default WorksP;
