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
      ></ReactPlayer>
    </div>
  );
};

export default VideoPlayer;
