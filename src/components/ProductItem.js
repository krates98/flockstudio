import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import VideoPlayer from "./VideoPlayer";

AOS.init();

const ProductsItem = ({ dat, onVideoSelect }) => {
  return (
    <>
      <Popup
        trigger={
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flip-card"
            onClick={() => onVideoSelect(dat)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front hover-overlay">
                <img className="avatar " src={dat.poster} alt="Avatar" />
                <div className="card-body card-img-overlay firstOverlay">
                  <div className="playButton text-center">
                    <i className="bi bi-play-btn-fill"></i>
                  </div>
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
              {/* <div className="flip-card-back cardFlipBack">
                <img className="avatar" src={dat.poster} alt="Avatar" />
                <div className="card-body card-img-overlay flipOverlay">
                  <h1>{dat.title}</h1>
                  <div className="playButtonFlip text-center">
                    <i className="bi bi-play-btn-fill"></i>
                  </div>
                  <p>Movie Year: 2012</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        }
        modal
      >
        <span>
          <VideoPlayer />
        </span>
      </Popup>
    </>
  );
};

export default ProductsItem;
