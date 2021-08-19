// import { ArrowLeft, ArrowRight } from '@styled-icons/foundation'
import React, { useEffect, useRef, useState } from "react";
import { TweenLite, Power3 } from "gsap";

// project import
import data from "../data/event-data";

// assets
import {
  ArrowLeftSquareFill,
  ArrowRightSquareFill,
} from "@styled-icons/bootstrap";

const Events = () => {
  let imgref = useRef(null);
  let desref = useRef(null);
  let titleref = useRef(null);
  const [mul, setmul] = useState(0);
  useEffect(() => {
    TweenLite.to(titleref.children[0], 0, {
      opacity: 1,
    });
    TweenLite.to(desref.children[0], 0, {
      opacity: 1,
    });
  });

  const slideLeft = () => {
    TweenLite.to(imgref.children, 1.5, {
      x: -608 * (mul + 1),
      ease: Power3.easeOut,
    });
  };

  const slideRight = () => {
    TweenLite.to(imgref.children, 1.5, {
      x: 0 - 608 * (mul - 1),
      ease: Power3.easeOut,
    });
  };
  const scale = () => {
    TweenLite.from(imgref.children, 1, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  const fadeOut = () => {
    TweenLite.to(desref.children[mul], 0.5, {
      opacity: 0,
      ease: Power3.easeOut,
    });
    if (mul !== 0) {
      TweenLite.from(desref.children[0], 1, {
        opacity: 0,
      });
    }
    TweenLite.to(titleref.children[mul], 0.5, {
      opacity: 0,
      ease: Power3.easeOut,
    });
    if (mul !== 0) {
      TweenLite.from(titleref.children[0], 1, {
        opacity: 0,
      });
    }
  };

  const fadeIn = () => {
    TweenLite.to(desref.children[mul + 1], 0.6, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeIn,
    });
    TweenLite.to(titleref.children[mul + 1], 0.6, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeIn,
    });
  };
  const faderev = () => {
    TweenLite.to(desref.children[mul - 1], 0.6, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeIn,
    });
    TweenLite.to(titleref.children[mul - 1], 0.6, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeIn,
    });
  };
  const next = () => {
    slideLeft();
    scale();
    fadeOut();
    fadeIn();
    setmul(mul + 1);
    console.log(mul);
  };
  const prev = () => {
    slideRight();
    scale();
    fadeOut();
    faderev();
    setmul(mul - 1);
    console.log(mul);
  };

  return (
    <div className="Events">
      <h1>
        <span>OUR</span> EVENTS
      </h1>
      <br />
      <div className="row">
        <div className="col-0 col-sm-0 col-md-0 col-lg-1">
          <div className="sidetitles" ref={(el) => (titleref = el)}>
            {data.map((data) => (
              <span id="Sidetitle" key={data.id}>
                <hr />
                {data.sidetitle}
              </span>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="EventImages" ref={(el) => (imgref = el)}>
            {data.map((data) => (
              <img src={data.img} alt={data.title} key={data.id} />
            ))}
          </div>
          <div className="controls">
            <ArrowLeftSquareFill
              size="35"
              onClick={prev}
              className={`${mul === 0 ? "disable" : "nondis"}`}
            />
            <ArrowRightSquareFill
              size="35"
              onClick={next}
              className={`${mul === 8 ? "disable" : "nondis"}`}
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
          <div className="descriptions" ref={(el) => (desref = el)}>
            {data.map((data) => (
              <div className="eventdes" key={data.id}>
                <p className="evhead">{data.title}</p>
                <p className="evdesc">{data.desc} </p>
              </div>
            ))}
            <div className="texture"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
