/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const Categories = ({ products }) => {
  const [showCard, setShowCard] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleCategory = (category) => {
    setShowCard(category);
    setVisibleProducts(3); // Reset visible products when changing categories
  };

  const filteredProducts =
    showCard === "all"
      ? products
      : products?.filter((product) => product.category === showCard);

  // console.log(filteredProducts);

  return (
    <section className="pt-16 pb-12 lg:pb-[90px] mt-16">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Featured Categories
        </h2>
        <p>Our Featured Categories.</p>
      </div>
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("all")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "all"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  All
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("cpu_processor")}
                  className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "cpu_processor"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  CPU / Processor
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("motherboard")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "motherboard"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  Motherboard
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("ram")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "ram"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  RAM
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("storage_device")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "storage_device"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  Storage Device
                </button>
              </li>{" "}
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("power_supply_unit")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "power_supply_unit"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  Power Supply Unit
                </button>
              </li>{" "}
              <li className="mb-1">
                <button
                  onClick={() => handleCategory("monitor")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "monitor"
                      ? "activeClasses bg-base-300 text-black"
                      : "inactiveClasses"
                  }`}
                >
                  Monitor
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-24 md:px-24 px-12">
          {filteredProducts?.slice(0, visibleProducts).map((product, index) => (
            <PortfolioCard
              key={index}
              category={product.category}
              ImageHref={product.image}
              title={product.productName}
              button="View Products"
              buttonHref={`/product/${product.category}/${product.id}`}
              showCard={showCard}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleProducts((prevCount) => prevCount + 3)}
            className={`btn btn-accent ${
              visibleProducts < filteredProducts?.length ? "block" : "hidden"
            }`}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-[90%] card card-compact my-8 bg-base-300 shadow-xl ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <figure>
        <img className="w-full h-[280px]" src={ImageHref} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <Link href={buttonHref} className="btn btn-primary">
            {button}
          </Link>
          {/* <button className="">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
