import React from "react";
import { Link } from "react-router-dom";
import Bg from "../componenets/Bg";
import { Button } from "../componenets/ButtonElement";
import HamMenu from "../componenets/hamburger menu";
import Navbar from "../componenets/navbar";
import ProBoxPage from "../componenets/ProBox/ProBox";
import Pro1 from "../Images/ProfilePic/pro1.png";
import Pro2 from "../Images/ProfilePic/pro2.png";

function AboutP() {
  return (
    <>
      <Bg />
      <Navbar />
      <HamMenu />
      <Link to="/sunshine2">
        <Button top backBTN>
          Back
        </Button>
      </Link>
      <div style={{ clear: "both", float: "none" }}></div>
      <ProBoxPage
        pic={Pro1}
        name="Nesilla Amiga"
        role="Product Designer"
        role2="Tincidunt porttitor lacus sed amet."
        bioTitle="Lorem ipsum dolor sit"
        bio=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse"
        quote=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse
        facilisis. Dictumst purus ut malesuada cursus aliquam metus iaculis."
      />
      <ProBoxPage
        pic={Pro2}
        name="Nesilla Amiga"
        role="Product Designer"
        role2="Tincidunt porttitor lacus sed amet."
        bioTitle="Lorem ipsum dolor sit"
        bio=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse"
        quote=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse
        facilisis. Dictumst purus ut malesuada cursus aliquam metus iaculis."
      />
      <ProBoxPage
        pic={Pro2}
        name="Nesilla Amiga"
        role="Product Designer"
        role2="Tincidunt porttitor lacus sed amet."
        bioTitle="Lorem ipsum dolor sit"
        bio=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse"
        quote=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ipsum
        ac diam tortor dui tortor. Molestie eleifend ut ornare et, proin
        egestas quam etiam. Ut viverra turpis vitae in vitae suspendisse
        facilisis. Dictumst purus ut malesuada cursus aliquam metus iaculis."
      />
    </>
  );
}

export default AboutP;
