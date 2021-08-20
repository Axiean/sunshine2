import React from "react";
import { motion } from "framer-motion";
import Navbar from "../componenets/navbar";
import HamMenu from "../componenets/hamburger menu";
import { ArrowLeft, Button } from "../componenets/ButtonElement";
import { Link } from "react-router-dom";
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
    </motion.div>
  );
}

export default WorksP;
