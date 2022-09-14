//{data.popular[1].poster}

import React from "react";

const Slider = () => {
  return (
    <>
      <div className="slider1">
        <div className="banner1">
          <img alt="Venom" src="https://wallpaper.dog/large/11036510.jpg" />
          <div className="text-box text-box1 ">
            <h1>Venom</h1>
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
          <img
            alt="Van Helsing"
            src="https://wallpaper.dog/large/11036762.jpg"
          />
          <div className="text-box text-box2">
            <h1>Van Helsing</h1>
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
          <img
            alt="Guardians Of The Galaxy"
            src="https://wallpaper.dog/large/11036753.jpg"
          />
          <div className="text-box text-box3">
            <h1>Tron</h1>
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
          <img
            alt="Game Of Thrones"
            src="https://wallpaper.dog/large/11036520.jpg"
          />
          <div className="text-box text-box4">
            <h1>Spider-Man</h1>
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
