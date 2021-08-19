import React, { useState } from "react";
import { Link } from "react-scroll";

// project imports
import { anim, revanim } from "../utils/anime";

// assets
import logo from "../images/logo-head.png";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);

  const handleClick = () => {
    settoggle(!toggle);
    if (toggle === false) anim();
    if (toggle === true) revanim();
  };

  return (
    <nav>
      <div className="Navbar">
        <button
          className={`hamburger ${toggle ? "opened" : ""}`}
          onClick={handleClick}
        >
          <svg width="100" height="60" viewBox="0 0 100 100">
            <path
              strokeLinecap="round"
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              strokeLinecap="round"
              className="line line2"
              d="M 20,50 H 80"
            />
            <path
              strokeLinecap="round"
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <img src={logo} alt="logo" />
        <p>Ayuda</p>
      </div>
      <div className={`menu ${toggle ? "menu-active" : ""}`}>
        <div className="menu-links">
          <div className="menu-link">
            <Link
              to="Story"
              smooth={true}
              duration={1000}
              onClick={handleClick}
            >
              Our Story
            </Link>
          </div>
          <div className="menu-link">
            <Link
              to="Initiatives"
              smooth={true}
              duration={2000}
              onClick={handleClick}
            >
              Initiatives
            </Link>
          </div>
          <div className="menu-link">
            <Link
              to="Gallery"
              smooth={true}
              duration={2000}
              onClick={handleClick}
            >
              Gallery
            </Link>
          </div>
          <div className="menu-link">
            <Link
              to="Events"
              smooth={true}
              duration={2500}
              onClick={handleClick}
            >
              Events
            </Link>
          </div>
          <div className="menu-link">
            <Link
              to="Blogspot"
              smooth={true}
              duration={2700}
              onClick={handleClick}
            >
              Blogspot
            </Link>
          </div>
          <div className="menu-link">
            <Link
              to="Board"
              smooth={true}
              duration={3000}
              onClick={handleClick}
            >
              Board Members
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
