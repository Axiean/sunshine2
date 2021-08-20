import { motion } from "framer-motion";
import React from "react";
import HamMenu from "../componenets/hamburger menu";

function ServicesP() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HamMenu />
      <div></div>
    </motion.div>
  );
}

export default ServicesP;
