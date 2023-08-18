import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="px-12 lg:px-24 md:px-24 my-14">
      <h1 className="text-6xl font-bold text-center">Products</h1>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
