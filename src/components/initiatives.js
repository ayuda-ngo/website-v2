import React, { useState } from "react";

// project imports
import loadable from "@loadable/component";
// assets
import sudhaar from "../images/initiatives/Sudhaar.png";
import gyaan from "../images/initiatives/Gyaan.png";
import nirmaan from "../images/initiatives/Nirmaan.png";
import gogreen from "../images/initiatives/Go-Green.png";
import muskaan from "../images/initiatives/Muskaan.png";

import {
  ArrowLeftSquareFill,
  ArrowRightSquareFill,
} from "@styled-icons/bootstrap";

const Carousel = loadable(() => import("react-spring-3d-carousel"));

const Initiatives = () => {
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: {
      tension: 280,
      friction: 60,
    },
  });

  const InCards = [
    {
      key: 1,
      content: <img src={sudhaar} alt="1" />,
      link: "https://medium.com/series/ccf401c07ae",
    },
    {
      key: 2,
      content: <img src={gyaan} alt="2" />,
      link: "https://medium.com/series/40893625143b",
    },
    {
      key: 3,
      content: <img src={nirmaan} alt="3" />,
      link: "https://medium.com/series/fb1492a32180",
    },
    {
      key: 4,
      content: <img src={gogreen} alt="4" />,
      link: "https://medium.com/series/46e8ab47fa44",
    },
    {
      key: 5,
      content: <img src={muskaan} alt="5" />,
      link: "https://medium.com/series/48c090b2a22f",
    },
    {
      key: 6,
      content: <img src={sudhaar} alt="1" />,
      link: "https://medium.com/series/ccf401c07ae",
    },
    {
      key: 7,
      content: <img src={gyaan} alt="2" />,
      link: "https://medium.com/series/40893625143b",
    },
    {
      key: 8,
      content: <img src={nirmaan} alt="3" />,
      link: "https://medium.com/series/fb1492a32180",
    },
    {
      key: 9,
      content: <img src={gogreen} alt="4" />,
      link: "https://medium.com/series/46e8ab47fa44",
    },
    {
      key: 10,
      content: <img src={muskaan} alt="5" />,
      link: "https://medium.com/series/48c090b2a22f",
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        if (index === card.goToSlide) window.open(slide.link);
        setCard({ ...card, goToSlide: index });
      },
    };
  });

  const onRight = () => {
    setCard({ ...card, goToSlide: card.goToSlide + 1 });
  };

  const onLeft = () => {
    setCard({ ...card, goToSlide: card.goToSlide - 1 });
  };

  return (
    <div className="Initiatives">
      <br />
      <br />
      <div className="title">
        <h1>
          <span>OUR</span> INITIATIVES
        </h1>
      </div>
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className="controls arrows">
        <ArrowLeftSquareFill size="35" onClick={onLeft} className="leftarr" />
        <ArrowRightSquareFill
          size="35"
          onClick={onRight}
          className="rightarr"
        />
      </div>
    </div>
  );
};

export default Initiatives;
