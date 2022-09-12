import React from "react";
import style from "./style.css";

const ProductsItem = ({ dat, onVideoSelect }) => {
  return (
    <>
      <div className="card-hover" onClick={() => onVideoSelect(dat)}>
        <div className="p-2">
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
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
