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
    // const script = document.createElement("script");
    // script.async = true;
    // script.src = "./top10.js";
    // script.onload = () => this.scriptLoaded();
    // document.head.appendChild(script);
  }

  onVideoSelect = (dat) => {
    this.setState({ selectedVideo: dat });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
