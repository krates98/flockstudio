import React from "react";
import ProductsDisplay from "./ProductsDisplay";
import Footer from "./Footer";
import Slider from "./Slider";
import data from "../data.json";
import "./styles/navbar.css";
import VideoPlayer from "./NetflixStyleSlider";
import TrendingMovies from "./TrendingMovies";

class Home extends React.Component {
  state = { selectedVideo: null };

  componentDidMount() {
    // const rand = Math.floor(Math.random() * 28);
    // this.setState({ selectedVideo: data.movies[rand] });
    console.log(this.state.selectedVideo);
  }

  onVideoSelect = (dat) => {
    this.setState({ selectedVideo: dat });
  };

  render() {
    return (
      <>
        <div>
          <Slider />
        </div>
        <div>
          <VideoPlayer />
        </div>

        <div>
          <ProductsDisplay data={data} />
        </div>

        <div>
          <TrendingMovies />
        </div>

        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
