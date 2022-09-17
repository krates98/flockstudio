import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles/slider.css";

import React from "react";

const Slider = () => {
  return (
    <>
      <div className="slider1">
        <div className="banner1">
          <LazyLoadImage
            width={1920}
            height={1200}
            effect="blur"
            src="https://wallpaper.dog/large/694689.jpg" // use normal <img> attributes as props
            placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
          />

          {/* <img alt="Venom" src="" /> */}
          <div className="text-box text-box1 ">
            <h1>Joker</h1>
            <span></span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="banner2">
          <LazyLoadImage
            width={1920}
            height={1080}
            effect="blur"
            src="https://wallpaper.dog/large/697091.jpg" // use normal <img> attributes as props
            placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
          />

          <div className="text-box text-box2">
            <h1>Warcraft</h1>
            <span></span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="banner3">
          <LazyLoadImage
            width={1920}
            height={1080}
            effect="blur"
            src="https://wallpaper.dog/large/696881.jpg" // use normal <img> attributes as props
            placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
          />
          {/* <img
            alt="Guardians Of The Galaxy"
            src="https://wallpaper.dog/large/11036753.jpg"
          /> */}
          <div className="text-box text-box3">
            <h1>Batman</h1>
            <span></span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="banner4">
          <LazyLoadImage
            width={1920}
            height={1080}
            effect="blur"
            src="https://wallpaper.dog/large/5531132.jpg" // use normal <img> attributes as props
            placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
          />
          {/* <img
            alt="Game Of Thrones"
            src="https://wallpaper.dog/large/11036520.jpg"
          /> */}
          <div className="text-box text-box4">
            <h1>Lucifer</h1>
            <span></span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="comingSoon">
        <h5>Coming Soon...</h5>
      </div> */}
    </>
  );
};

export default Slider;
