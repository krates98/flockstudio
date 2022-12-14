import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

AOS.init();

const ProductsItem = ({ dat, onVideoSelect }) => {
  const videoSrc = `${dat.trailer}?&autoplay=1&muted=0&#t=0s`;
  return (
    <>
      <Popup
        trigger={
          <div className="flip-card">
            <div className="flip-card-inner" onClick={() => onVideoSelect(dat)}>
              <div className="flip-card-front hover-overlay ">
                <div className="avatar">
                  <LazyLoadImage
                    width={250}
                    height={350}
                    effect="blur"
                    src={dat.poster} // use normal <img> attributes as props
                    placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                  />
                </div>
                <div className="card-body card-img-overlay firstOverlay">
                  {/* <div className="playButton text-center">
                    <i className="bi bi-play-btn-fill"></i>
                  </div> */}
                  <div className="banner-content">
                    <div className="cardOverlayText">
                      <h2>{dat.title}</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                  <div className="cardText-overlay">
                    <p className="card-text">{dat.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        modal
      >
        <div>
          <div className="container embed-responsive embed-responsive-16by9 iframeVideo">
            <iframe
              title={dat.title}
              className="embed-responsive-item videoPlayer"
              src={videoSrc}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ProductsItem;
