import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
      <div data-aos="fade-up" data-aos-duration="1500" className="trendCenter">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="trendingSwiper"
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              effect="blur"
              src="https://assets.mubicdn.net/images/notebook/post_images/33421/images-w1400.jpg?1625400709"
              placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              className="img-responsive"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TrendingMovies;
