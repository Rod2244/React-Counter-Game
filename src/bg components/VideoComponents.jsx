import React from "react";
import bgvid from "../assets/bgvid.mp4";

const VideoComponent = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="bg-video"
    >
      <source src={bgvid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
