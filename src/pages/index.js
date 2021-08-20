import React from "react";
import About from "../componenets/about";
import Bg from "../componenets/Bg";
import Contact from "../componenets/contact";
import Footer from "../componenets/footer";
import HamMenu from "../componenets/hamburger menu";
import Header from "../componenets/header";
import Navbar from "../componenets/navbar";
import Services from "../componenets/services";
import { Data } from "../componenets/services/Data";
import { motion } from "framer-motion";

import Works from "../componenets/works";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Bg />
      <HamMenu />
      <Navbar />
      <Header />
      <Services {...Data} />
      <Works />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
