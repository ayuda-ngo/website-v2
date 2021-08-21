import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { Link as Scrolldown } from "react-scroll";

// project imports
import data from "../data/board-data";

// assets
import "../styles/board-page.scss";
import { Instagram, Linkedin } from "@styled-icons/boxicons-logos";

const logo = "../images/logo-head.png";

const generateBoardSection = (year) => (
  <div className="Bcards">
    <h1>{year.title}</h1>

    <div className="cards">
      {year.data.map((data) => (
        <div className="Card" key={data.id}>
          <img
            className="Card-top"
            src={data.img}
            alt={data.name}
            loading="lazy"
          />
          <div className="card-body">
            <div className="header">
              <h5 className="Card-title">{data.name}</h5>
              <div className="social-i">
                {data.instagram !== "." && (
                  <a
                    href={data.instagram}
                    title={`${data.name} Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size="24" color="#ffffff" />
                  </a>
                )}
                {data.linkedin !== "." && (
                  <a
                    href={data.linkedin}
                    id="linkedin"
                    title={`${data.name} LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size="24" color="#ffffff" />
                  </a>
                )}
              </div>
            </div>
            <p className="Card-text">{data.designation}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BoardMemberPage = () => {
  const { y2021, y2020, y2019, y2018, y2017, y2016, y2015, y2014, y2013 } =
    data;

  return (
    <div className="BoardP">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ayuda NGO | Board</title>
        <link rel="canonical" href="https://ngoayuda.org/boards" />
      </Helmet>

      <div className="Bhead row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contoverflow">
          <Link to="/" className="title">
            <StaticImage src={logo} alt="ayudalogo" />
            <h1>AYUDA</h1>
          </Link>
          <div className="content">
            <h3>Board Members</h3>
            <h4>2016-2021</h4>
            <p>
              “It is so hard to say goodbye to <span> strangers</span> who
              turned into <span> your family.</span> We miss your presence in
              the NGO and promise to continue your{" "}
              <span> legacy with pride. </span>It’s been one blur of fun!”
            </p>
            <Scrolldown to="Bcards" smooth={true} duration={1000}>
              View Here
            </Scrolldown>
          </div>
        </div>
      </div>

      {generateBoardSection(y2021)}
      {generateBoardSection(y2020)}
      {generateBoardSection(y2019)}
      {generateBoardSection(y2018)}
      {generateBoardSection(y2017)}
      {generateBoardSection(y2016)}
      {generateBoardSection(y2015)}
      {generateBoardSection(y2014)}
      {generateBoardSection(y2013)}
    </div>
  );
};

export default BoardMemberPage;
