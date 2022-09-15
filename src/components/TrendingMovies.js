import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

AOS.init();

const TrendingMovies = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="titleHead">
        <h1>Trending On Flock</h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div
          id="carouselExampleControls"
          class="carousel slide customStyleSlide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <LazyLoadImage
                effect="blur"
                src="https://www.vitalthrills.com/wp-content/uploads/2021/07/duning5.jpg.webp" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                className="fillLazyimage"
              />
            </div>
            <div class="carousel-item">
              <LazyLoadImage
                effect="blur"
                src="https://i.ytimg.com/vi/uylTTnv_6AM/maxresdefault.jpg" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              />
            </div>
            <div class="carousel-item">
              <LazyLoadImage
                effect="blur"
                src="https://wallpapercave.com/wp/wp4393360.jpg" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TrendingMovies;
