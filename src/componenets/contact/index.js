import React from "react";
import { Form } from "./Form";
import Laugh from "../../Images/photo.png";
import Flash from "../../Images/Group.png";
import "./contact.css";
function Contact() {
  return (
    <section id="contact">
      <div id="p1">
        <div id="title-contact">
          <h2>Wanna Work With Us? </h2>
          <h5>Our Pleasure!</h5>
          <img src={Laugh} alt="" />
        </div>
        <div id="attention">
          <p id="wide-p">
            Write your information <br /> here and <br /> <b>send</b> us !
          </p>
          <p id="mobile-p">
            Write your information here and <b>send</b> us !
          </p>
          <img src={Flash} alt="flash" />
        </div>
      </div>

      <div id="form">
        <Form />
      </div>
      <div style={{ clear: "both", float: "none" }}></div>
    </section>
  );
}

export default Contact;
