import React from "react";
import About from "../componenets/about";
import Bg from "../componenets/Bg";
import Contact from "../componenets/contact";
import Footer from "../componenets/footer";
import Header from "../componenets/header";
import Navbar from "../componenets/navbar";
import Services from "../componenets/services";
import { Data } from "../componenets/services/Data";
import Works from "../componenets/works";

function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <Header />
      <Services {...Data} />
      <Works />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
