import data from "../data.json";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

//{data.popular[1].poster}

const Slider = () => {
  return (
    <>
      <div class="container sliderBg">
        <div class="row">
          <div class="col-4 titleSlider">Popular Movies</div>
          <div class="col-8">
            <div className="slider">
              <Splide
                options={{
                  rewind: true,
                  height: 200,
                  width: 800,
                  gap: "1rem",
                }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <img src={data.popular[1].poster} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                  <img src={data.popular[2].poster} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                  <img src={data.popular[3].poster} alt="Image 3" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
