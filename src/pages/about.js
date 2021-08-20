import { motion } from "framer-motion";
import React from "react";

function Abouts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1>DalaaaaaaaaMMMMM</h1>
      </div>
    </motion.div>
  );
}

export default Abouts;
