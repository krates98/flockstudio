import React from "react";
import "./style.css";
import data from "../data.json";

// const VideoPlayer = ({ dat }) => {
//   if (!dat) {
//     return <div>Loading...</div>;

//   }
//   // "https://player.vimeo.com/video/644841857?&autoplay=1&muted=1&#t=0s"
//   const videoSrc = `${dat.trailer}?&autoplay=1&muted=0&#t=0s`;
//   if (dat.trailer) {
//     return (
//       <>
//         <div className="container embed-responsive embed-responsive-16by9 iframeVideo">
//           <iframe
//             title={dat.title}
//             className="embed-responsive-item videoPlayer"
//             src={videoSrc}
//             allow="autoplay"
//           ></iframe>
//         </div>
//       </>
//     );
//   }

//   return <></>;
// };

const VideoPlayer = () => {
  if (!data) {
    return <div>Loading...</div>;
  }
  // "https://player.vimeo.com/video/644841857?&autoplay=1&muted=1&#t=0s"
  const videoSrc = `${data.movies[1].trailer}?&autoplay=1&muted=0&#t=0s`;
  if (data) {
    return (
      <>
        <div className="container embed-responsive embed-responsive-16by9 iframeVideo">
          <iframe
            title={data.movies[1].trailer}
            className="embed-responsive-item videoPlayer"
            src={videoSrc}
            allow="autoplay"
          ></iframe>
        </div>
      </>
    );
  }

  return <></>;
};

export default VideoPlayer;
