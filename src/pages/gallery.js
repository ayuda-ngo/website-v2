import React from "react";
import { Link as Scrolldown } from "react-scroll";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";


// project import
import data from "../data/gallery-data"


// assets
import "../styles/gallery-page.scss";
import logo from "../images/logo-head.png";

const GalleryPage = () => {
  return (
    <div className="GalleryP">
      <div className="Ghead row">
        <Helmet>
          <meta charSet="utf-8" />
          <title>NGO Ayuda | Gallery</title>
          <link rel="canonical" href="https://ngoayuda.org/gallery" />
        </Helmet>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contoverflow">
          <Link to="/" className="title">
            <img src={logo} alt="ayudalogo" />
            <p>Ayuda</p>
          </Link>
          <div className="content">
            <h3>Gallery Images</h3>
            <p>
              Every <span>Smile</span> has a story. With Each <span>Smile</span>{" "}
              we <span>capture,</span> we hope to{" "}
              <span> Connect, Inspire & Empower.</span>
            </p>
            <Scrolldown to="Gimages" smooth={true} duration={1000}>
              View Here
            </Scrolldown>
          </div>
        </div>
        <div className="col-0 col-sm-0 col-md-0 col-lg-7 col-xl-7 galleryscroll">
          <div className="roll"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="Gimages">
        {data.map((data) => (
          <div className="frame">
            <img src={data.img} alt="Gallerypic" key={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
