import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data.json";

AOS.init();

const TrendingMovies = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="titleHead">
        <h1>Trending On Flock</h1>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carSlider"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://unsplash.it/650/350?image=675"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://unsplash.it/650/350?image=674"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://unsplash.it/650/350?image=673"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
    </>
  );
};

export default TrendingMovies;
