import React from "react";

// project import
import Landing from "../components/landing";
import Story from "../components/story";

//assets
import "../styles/home.scss";
import "bootstrap/dist/css//bootstrap-grid.css";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Story />
    </div>
  );
};

export default HomePage;
