import React from "react";

// project import
import Landing from "../components/landing";
import Story from "../components/story";
import VideoPlayer from "../components/video-player";
import Events from "../components/events";
import ContactUs from "../components/contact-us";

//assets
import "../styles/home.scss";
import "bootstrap/dist/css/bootstrap-grid.css";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Story />
      <VideoPlayer />
      <Events />
      <ContactUs />
    </div>
  );
};

export default HomePage;
