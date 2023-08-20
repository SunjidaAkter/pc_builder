import React from "react";

const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="card card-compact w-[90%] my-8 bg-base-100 shadow-xl">
      <figure>
        <img
          src={product?.image}
          alt={product?.productName}
          className="w-full h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.category}</h2>
        <p>{product?.productName.slice(0, 30)}...</p>
        <div className="badge badge-primary badge-outline font-bold">
          Status: {product?.status.toString()}
        </div>
        <div className="badge badge-primary badge-outline font-bold">
          Rating: {product?.averageRating}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;
