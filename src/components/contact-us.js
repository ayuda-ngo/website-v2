import {
  FacebookSquare,
  Instagram,
  Linkedin,
  Medium,
} from "@styled-icons/boxicons-logos";
import React from "react";

const ContactUs = () => (
  <div className="ContactUs">
    <h1>GET IN TOUCH.</h1>
    <h1>GET INVOLVED.</h1>
    <p>
      “A person’s most useful asset is not a head full of knowledge, but a heart
      full of love, an ear ready to listen and a hand willing to aid others.”
      Want to volunteer, donate or share ideas? We would love to get in touch
      with you!
    </p>
    <a href="mailto:ngoayuda@gmail.com" id="contact">
      Contact Us
    </a>
    <div className="social">
      <a
        href="https://www.facebook.com/ngoayuda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookSquare size="30" color="#888888" className="icon" />
      </a>
      <a
        href="https://www.instagram.com/ayuda.ngo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Instagram size="30" color="#888888" className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/ayuda-ngo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size="30" color="#888888" className="icon" />
      </a>
      <a
        href="https://ngoayuda.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Medium size="30" color="#888888" className="icon" />
      </a>
    </div>
    <p id="copyright">© Copyright 2021 | NGO Ayuda VIT</p>
  </div>
);

export default ContactUs;
