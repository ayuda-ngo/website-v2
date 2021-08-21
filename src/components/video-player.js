import * as React from "react";
import ReactPlayer from "react-player";

// assets
import thumb from "../images/video/thumbnail.png";
import play from "../images/video/play.svg";

const VideoPlayer = () => {
  return (
    <div className="Vid">
      <p>
        Keeping our mission in mind, “To bring out the change in society by
        spreading hands to help out the underprivileged children and other
        backward social communities”
      </p>
      <ReactPlayer
        url="https://vimeo.com/589288784"
        playing
        controls
        loop
        playIcon={
          <button id="play">
            <img src={play} alt="play" id="playbtn" />
          </button>
        }
        light={thumb}
        className="videot vjsbig"
      />
      <div className="custom-shape-divider-top-1629532270">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default VideoPlayer;
