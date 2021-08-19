import React from "react";
import { Link as Scrolldown } from "react-scroll";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

// project imports
import data from "../data/board-data";

// assets
import "../styles/board-page.scss";
import logo from "../images/logo-head.png";
import { Instagram, Linkedin } from "@styled-icons/boxicons-logos";

const generateBoardSection = (year) => (
  <div className="Bcards">
    <h1>{year.title}</h1>

    <div className="cards">
      {year.data.map((data) => (
        <div className="Card" key={data.id}>
          <img className="Card-top" src={data.img} alt="Card cap" />
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
  const { y2021, y2020, y2019, y2018, y2017 } = data;
  return (
    <div className="BoardP">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NGO Ayuda | Board</title>
        <link rel="canonical" href="https://ngoayuda.org/board" />
      </Helmet>

      <div className="Bhead row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contoverflow">
          <Link to="/" className="title">
            <img src={logo} alt="ayudalogo" />
            <p>Ayuda</p>
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
        <div className="col-0 col-sm-0 col-md-0 col-lg-6 col-xl-6 boardscroll">
          <div className="roll"></div>
        </div>
      </div>

      {generateBoardSection(y2021)}
      {generateBoardSection(y2020)}
      {generateBoardSection(y2019)}
      {generateBoardSection(y2018)}
      {generateBoardSection(y2017)}
    </div>
  );
};

export default BoardMemberPage;
