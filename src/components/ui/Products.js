import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="px-12 lg:px-24 md:px-16 my-14">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Featured Products
        </h2>
        <p>Our Featured Products.</p>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <Card />
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
