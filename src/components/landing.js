import * as React from "react";
import { Link } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";

// assets
import {
  FacebookSquare,
  Instagram,
  Linkedin,
  Medium,
} from "@styled-icons/boxicons-logos";

const mainImg = "../images/landing-img.png";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className=" titles caption1">
            <hr />
            <h4>WE ARE AYUDA NGO</h4>
          </div>
          <div className=" titles caption2">
            <p>
              At <span>Ayuda,</span> we work towards the betterment of our{" "}
              <span>world</span>{" "}
            </p>
          </div>
          <div className=" titles caption3">
            <p>
              Bring out the change in society by spreading hands to help the
              unprivileged children and other backward communities.
            </p>
          </div>
          <div className=" titles btns">
            <Link to="Story" className="Learn" smooth={true} duration={1000}>
              Learn More
            </Link>
            <Link
              to="ContactUs"
              className="touch"
              smooth={true}
              duration={3000}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div id="Mainimg">
            <StaticImage src={mainImg} alt="Mainimg" placeholder="blurred" />
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/ngoayuda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FacebookSquare size="32" color="#888888" className="icon" />
            </a>
            <br />
            <a
              href="https://www.instagram.com/ayuda.ngo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Instagram size="32" color="#888888" className="icon" />
            </a>
            <br />
            <a
              href="https://www.linkedin.com/company/ayuda-ngo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size="30" color="#888888" className="icon" />
            </a>
            <br />
            <a
              href="https://ngoayuda.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium size="30" color="#888888" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
