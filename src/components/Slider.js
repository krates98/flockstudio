import data from "../data.json";

//{data.popular[1].poster}

const Slider = () => {
  return (
    <>
      <div className="slider1">
        <div className="banner1">
          <img
            alt="The Dark Knight"
            src="https://wallpaper.dog/large/10886361.jpg"
          />
          <div className="text-box text-box1 ">
            <h1>The Dark Knight</h1>
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
            alt="Iron Man"
            src="https://wallpaperaccess.com/full/1135430.jpg"
          />
          <div className="text-box text-box2">
            <h1>Iron Man</h1>
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
            alt="SpiderMan"
            src="https://images7.alphacoders.com/317/317140.png"
          />
          <div className="text-box text-box3">
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
        <div className="banner4">
          <img
            alt="SpiderMan"
            src="https://wallpaperaccess.com/full/140262.jpg"
          />
          <div className="text-box text-box4">
            <h1>Man Of Steel</h1>
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
      <div className="comingSoon">
        <h5>Coming Soon...</h5>
      </div>
    </>
  );
};

export default Slider;
