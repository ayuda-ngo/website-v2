import React from "react";

// project import
import Landing from "../components/landing";
import Story from "../components/story";
import ContactUs from "../components/contact-us";

//assets
import "../styles/home.scss";
import "bootstrap/dist/css//bootstrap-grid.css";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Story />
      <ContactUs />
    </div>
  );
};

export default HomePage;
