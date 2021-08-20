import { gsap, Power4 } from "gsap";
var tl = gsap.timeline();
const anim = () => {
  tl.paused(true);
  tl.to(".menu", {
    left: 0,
    duration: 2,
    ease: Power4.easeOut,
  });
  tl.to(
    ".menu-links > div",
    {
      opacity: 1,
      y: "-30px",
      duration: 0.8,
      stagger: 0.1,
    },
    "-=1"
  );
  tl.play();
};

const revanim = () => {
  tl.paused(true);
  tl.to(".menu", { left: "-100%" });
  tl.to(
    ".menu-links > div",
    {
      opacity: 0,
      y: "50px",
      stagger: 0.3,
    },
    "-=1"
  );
  tl.play();
};

export default { anim, revanim };
