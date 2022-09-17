import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/trending.css";

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
                src="https://cutewallpaper.org/21/seal-team-wallpaper/Wallpaper-gun,-USA,-soldier,-weapon,-man,-rifle,-bulletproof-.jpg"
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                className="img-responsive"
              />

              <div class="carousel-caption">
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
                src="https://gumlet.assettype.com/freepressjournal/2022-01/03dc29a2-79fb-4d55-acd4-ec53ff6efaa5/272734039_256339036635962_4776828115644958077_n_webp.jpg" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                className="img-responsive"
              />
              <div class="carousel-caption ">
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
                src="https://assets.thehansindia.com/h-upload/2022/03/14/1281604-whatsapp-image-2022-03-14-at-130148-9.webp" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                className="img-responsive"
              />
              <div class="carousel-caption">
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
