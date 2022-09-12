import React from "react";

import ProductsDisplay from "./ProductsDisplay";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";
import Slider from "./Slider";
import data from "../data.json";

class Home extends React.Component {
  state = { selectedVideo: null };

  componentDidMount() {
    const rand = Math.floor(Math.random() * 28);
    this.setState({ selectedVideo: data.movies[rand] });
  }

  onVideoSelect = (dat) => {
    this.setState({ selectedVideo: dat });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <div>
          <VideoPlayer dat={this.state.selectedVideo} />
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <ProductsDisplay onVideoSelect={this.onVideoSelect} data={data} />
        </div>
        {/* <div>
        <AwesomeSlider animation="cubeAnimation">
          <div data-src="https://i0.wp.com/storage.waploaded.com/images/257fd24f925482ce6db5f89b40af8f2e.png"></div>
          <div data-src="https://popflick-photo.s3.us-east-2.amazonaws.com/movie-graphics/Shoreline/492/492-h_2.jpg"></div>
          <div data-src="https://material.asset.catchplay.com/CAT-TW-001-A0312/artworks/posters/CAT-TW-001-A0312-P1200.jpg?hash=1656503637"></div>
          <div data-src="https://images2.imgbox.com/75/34/RNnpuo9k_o.jpg"></div>
        </AwesomeSlider>
      </div> */}
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
