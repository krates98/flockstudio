import React from "react";
import "./style.css";

const ProductsItem = ({ dat, onVideoSelect }) => {
  return (
    <>
      {/* <div className="card-hover" onClick={() => onVideoSelect(dat)}>
        <div className="p-2 card-hover-inner">
          <div className="card video-item">
            <img src={dat.poster} className="card-img-top" alt="..." />
            <div className="card-body card-img-overlay">
              <div className="playButton text-center">
                <i className="bi bi-play-btn-fill"></i>
              </div>
              <div className="cardText-overlay">
                <p className="card-text">{dat.title}</p>
              </div>
            </div>
          </div>
          <div class="card-hover-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div> */}
      <div className="flip-card" onClick={() => onVideoSelect(dat)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="avatar" src={dat.poster} alt="Avatar" />
            <div className="card-body card-img-overlay">
              <div className="playButton text-center">
                <i className="bi bi-play-btn-fill"></i>
              </div>
              <div className="cardText-overlay">
                <p className="card-text">{dat.title}</p>
              </div>
            </div>
          </div>

          <div className="flip-card-back">
            <h1>{dat.title}</h1>
            <div className="playButtonFlip text-center">
              <i className="bi bi-play-btn-fill"></i>
            </div>
            <p>Movie Year: 2012</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
