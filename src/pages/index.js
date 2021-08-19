import React from "react";
import { Helmet } from "react-helmet";

// project import
import Landing from "../components/landing";
import Story from "../components/story";
import VideoPlayer from "../components/video-player";
import Initiatives from "../components/initiatives";
import Gallery from "../components/gallery";
import Events from "../components/events";
import Blogs from "../components/blogs";
import Board from "../components/board";
import ContactUs from "../components/contact-us";

//assets
import "../styles/home.scss";
import "bootstrap/dist/css/bootstrap-grid.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ayuda NGO</title>
        <link rel="canonical" href="https://ngoayuda.org" />
      </Helmet>
      <Landing />
      <Story />
      <VideoPlayer />
      <Initiatives />
      <Gallery />
      <Events />
      <Blogs />
      <Board />
      <ContactUs />
    </>
  );
};

export default HomePage;
