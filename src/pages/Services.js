import React from "react";
import { motion } from "framer-motion";
import HamMenu from "../componenets/hamburger menu";
import Navbar from "../componenets/navbar";
import { ArrowLeft, Button } from "../componenets/ButtonElement";
import { Link } from "react-router-dom";
import {
  Srv_container,
  Srv_container_chart,
  Srv_container_des,
  Srv_container_info,
  Srv_container_title,
} from "../componenets/serviceContainer";
function ServicesP() {
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
      <Srv_container>
        <Srv_container_title>Lorem ipsum dolor </Srv_container_title>
        <Srv_container_info right>
          <Srv_container_des right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
            ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
            egestas quam etiam. Ut viverra turpis vitae.
          </Srv_container_des>
          <Srv_container_chart right></Srv_container_chart>
        </Srv_container_info>
      </Srv_container>
      <Srv_container>
        <Srv_container_title>Lorem ipsum dolor </Srv_container_title>
        <Srv_container_info>
          <Srv_container_des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
            ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
            egestas quam etiam. Ut viverra turpis vitae Molestie eleifend ut
            ipsum ac diam tortor dui tortor .
          </Srv_container_des>
          <Srv_container_chart></Srv_container_chart>
        </Srv_container_info>
      </Srv_container>
      <Srv_container>
        <Srv_container_title>Lorem ipsum dolor </Srv_container_title>
        <Srv_container_info right>
          <Srv_container_des right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
            ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
            egestas quam etiam. Ut viverra turpis vitae.
          </Srv_container_des>
          <Srv_container_chart right></Srv_container_chart>
        </Srv_container_info>
      </Srv_container>
    </motion.div>
  );
}

export default ServicesP;
