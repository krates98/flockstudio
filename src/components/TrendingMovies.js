import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/caraousel.css";

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
                src="https://moviegalleri.net/wp-content/gallery/master-release-posters-hd/Master-Movie-Release-Posters-HD-1e2c7c5.jpg"
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                className="fillLazyimage"
              />
              <div class="carousel-caption d-none d-md-block captionCar">
                <h5>The Master</h5>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ut neque libero. Vivamus hendrerit velit orci. Aliquam cursus
                  porttitor est, at gravida metus sagittis feugiat. Etiam ac
                  rhoncus arcu, vel ullamcorper mi.
                </p> */}
              </div>
            </div>
            <div class="carousel-item">
              <LazyLoadImage
                effect="blur"
                src="https://catlingonfilm.files.wordpress.com/2020/12/extraction_movie_poster.jpeg" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              />
              <div class="carousel-caption d-none d-md-block captionCar">
                <h5>Extraction</h5>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ut neque libero. Vivamus hendrerit velit orci. Aliquam cursus
                  porttitor est, at gravida metus sagittis feugiat. Etiam ac
                  rhoncus arcu, vel ullamcorper mi.
                </p> */}
              </div>
            </div>
            <div class="carousel-item">
              <LazyLoadImage
                effect="blur"
                src="https://images.thedirect.com/media/article_full/black-adam-characters-poster.jpg" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              />
              <div class="carousel-caption d-none d-md-block captionCar">
                <h5>The Rock</h5>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ut neque libero. Vivamus hendrerit velit orci. Aliquam cursus
                  porttitor est, at gravida metus sagittis feugiat. Etiam ac
                  rhoncus arcu, vel ullamcorper mi.
                </p> */}
              </div>
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
