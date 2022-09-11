import React from "react";
import style from "./style.css";

const VideoPlayer = ({ dat }) => {
  if (!dat) {
    return <div>Loading...</div>;
  }
  // "https://player.vimeo.com/video/644841857?&autoplay=1&muted=1&#t=0s"
  const videoSrc = `${dat.trailer}?&autoplay=1&muted=0&#t=0s`;
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item videoPlayer"
          src={videoSrc}
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
