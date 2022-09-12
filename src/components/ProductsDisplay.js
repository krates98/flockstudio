import React from "react";
import ProductsItem from "./ProductItem";
import "./style.css";

const ProductsDisplay = ({ data, onVideoSelect }) => {
  const renderedList = data.movies.map((dat) => {
    return (
      <ProductsItem onVideoSelect={onVideoSelect} key={dat.title} dat={dat} />
    );
  });
  return (
    <div className="d-flex flex-wrap mb-3 justify-content-around cards container">
      {renderedList}
    </div>
  );
};

export default ProductsDisplay;
