import React from "react";
import { Link } from "gatsby";

// project imports
import data from "../data/board-data/board-data-2021";
import { Instagram, Linkedin } from "@styled-icons/boxicons-logos";

const Board = () => (
  <div className="Board">
    <br />
    <br />
    <h1>
      BOARD <span> MEMBERS</span>
    </h1>
    <div className="cards">
      {data.data.map((data) => (
        <div className="Card" key={data.id}>
          <img className="Card-top" src={data.img} alt={data.name} />
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

    <Link to="/boards" id="See">
      See More
    </Link>

    <br />
    <br />
  </div>
);

export default Board;
