import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const TrendingMovies = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="titleHead">
        <h1>Trending On Flock</h1>
      </div>
    </>
  );
};

export default TrendingMovies;
