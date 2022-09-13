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
  };

  render() {
    return (
      <>
        <div>
          <Slider />
        </div>
        {/* <div>
          <VideoPlayer dat={this.state.selectedVideo} />
        </div> */}

        <div>
          <ProductsDisplay onVideoSelect={this.onVideoSelect} data={data} />
        </div>

        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
