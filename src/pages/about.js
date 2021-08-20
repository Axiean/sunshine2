import { motion } from "framer-motion";
import React from "react";
import HamMenu from "../componenets/hamburger menu";
import Services from "../componenets/services";

function Abouts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HamMenu />
      <div>
        <h1>DalaaaaaaaaMMMMM</h1>
        <Services />
      </div>
    </motion.div>
  );
}

export default Abouts;
