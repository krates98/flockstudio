import React from "react";
import ProductsItem from "./ProductItem";
import "./styles/popular.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ProductsDisplay = ({ data, onVideoSelect }) => {
  const renderedList = data.movies.map((dat) => {
    return (
      <ProductsItem onVideoSelect={onVideoSelect} key={dat.title} dat={dat} />
    );
  });
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="titleHead">
        <h1>Popular On Flock</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="d-flex flex-wrap justify-content-evenly cards"
      >
        {renderedList}
      </div>
    </>
  );
};

export default ProductsDisplay;
